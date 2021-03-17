#https://github.com/DhrumilParikh-github/ObjectDetection-without-GPU
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import cv2
import numpy as np
import time
import os
import urllib.request
import threading, time
ticker = threading.Event()
from PIL import Image 
import imutils


### Set Up FireStore ###
cred = credentials.Certificate('FireStore.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

### Camera Parameter ###
cameraId= "LWN_L4_C1"
lib="LWN"
level="L4"
cap = cv2.VideoCapture('http://10.27.35.143:8080/video')  ## ip camera using android phone app.  Ip Webcam
cap.set(cv2.CAP_PROP_BUFFERSIZE, 0)     ## no buffer
cap.set(cv2.CAP_PROP_AUTOFOCUS, 0)

font = cv2.FONT_HERSHEY_PLAIN


# ### Retrieve all thet Seats related to this camera ###
# SeatsList= db.collection(u'Seats').where(u"cameraId",u"==",cameraId).stream()
# SeatsArray = [ seat.to_dict() for seat in SeatsList ]
# print(SeatsArray)


### Load Yolo ###

net = cv2.dnn.readNet("yolov3.weights", "yolov3.cfg")
classes = []
with open("coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]
layer_names = net.getLayerNames()
#print(layer_names)
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
#print(output_layers)
colors = np.random.uniform(0, 255, size=(len(classes), 3))


### Inference every 5 seconds
WAIT_TIME_SECONDS = 5
starting_time = time.time()
frame_id = 0
#not ticker.wait(WAIT_TIME_SECONDS)
while True:
     #print(SeatsArray)
     cap = cv2.VideoCapture('http://10.27.35.143:8080/video')

     _, frame = cap.read()
     frame_id += 1
     height, width, channels = frame.shape
     class_ids = []
     confidences = []
     boxes = []
     seatImageToDetect=[]
     seatImageToDetectSize=[]
     SeatsArray=[]
     ### Retrieve all thet Seats related to this camera ###
     SeatsList= db.collection(u'Seats').where(u"cameraId",u"==",cameraId).stream()
     SeatsArray = [ seat.to_dict() for seat in SeatsList ]
     # print(SeatsArray)

     ##Crop out seats images 
     for i in SeatsArray:
          im=frame[i["y1Img"]:i["y2Img"],i["x1Img"]:i["x2Img"]]
          #im1 = imutils.resize(im, width=416)
          seatImageToDetect.append(im)
          seatImageToDetectSize.append([i["x2Img"]-i["x1Img"],i["y2Img"]-i["y1Img"]])
          cv2.rectangle(frame, (i["x1Img"], i["y1Img"]), (i["x2Img"], i["y2Img"]), (255,0,0), 2)
          cv2.putText(frame,i["seatName"], (i["x1Img"],i["y1Img"] + 30), font, 3, (255,0,0), 3)
     blob = cv2.dnn.blobFromImages(seatImageToDetect, 1/255, (416, 416), (0, 0, 0), True, crop=False)
     net.setInput(blob)
     outs = net.forward(output_layers)


     for i in range(len(seatImageToDetect)):
          #i=len(seatImageToDetect)-u-1
          detectionCheck=0
          for out in outs:
               out_tensor = out[i]

               for detection in out_tensor:
                    scores = detection[5:]
                    class_id = np.argmax(scores)
                    confidence = scores[class_id]
                    if confidence > 0.7:
                         # Object detected
                         center_x = int(detection[0] *seatImageToDetectSize[i][0])+SeatsArray[i]["x1Img"]
                         center_y = int(detection[1] *seatImageToDetectSize[i][1])+SeatsArray[i]["y1Img"]
                         w = int(detection[2] *seatImageToDetectSize[i][0])
                         h = int(detection[3] *seatImageToDetectSize[i][1])

                         # Rectangle coordinates
                         x = int(center_x - w / 2)
                         y = int(center_y - h / 2)

                         boxes.append([x, y, w, h])
                         confidences.append(float(confidence))
                         class_ids.append(class_id)
                         detectionCheck=1
                         #### update database
                         if(SeatsArray[i]["status"]=="Reserved" or SeatsArray[i]["unavailable"]==True):
                              break
                         elif classes[class_id]=="person" and SeatsArray[i]["status"]!="Occupied":
                              SeatsArray[i]["status"]="Occupied"
                              db.collection(u'Seats').document(SeatsArray[i]["id"]).update({u'status':'Occupied'})
                              print("Seat Updated to occupied")
                              break
                         elif classes[class_id]=="bottle" and SeatsArray[i]["status"]!="Hogged":
                              SeatsArray[i]["status"]="Hogged"
                              db.collection(u'Seats').document(SeatsArray[i]["id"]).update({u'status':'Hogged'})
                              print("Seat Updated to Hogged")
                              break
                         elif SeatsArray[i]["status"]!="Unoccupied":
                              SeatsArray[i]["status"]="Unoccupied"
                              db.collection(u'Seats').document(SeatsArray[i]["id"]).update({u'status':'Unoccupied'})
                              print("Seat Updated to Unoccupied")
                              break
          if (detectionCheck==0 and SeatsArray[i]["status"]!="Unoccupied" and SeatsArray[i]["status"]!="Reserved" and SeatsArray[i]["unavailable"]==False):
               SeatsArray[i]["status"]="Unoccupied"
               db.collection(u'Seats').document(SeatsArray[i]["id"]).update({u'status':'Unoccupied'})
               print("Database updated")
     indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.8, 0.3)

     for i in range(len(boxes)):
          if i in indexes:
               x, y, w, h = boxes[i]
               label = str(classes[class_ids[i]])
               confidence = confidences[i]
               color = colors[class_ids[i]]
               cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
               cv2.putText(frame, label + " " + str(round(confidence, 2)), (x, y + 30), font, 3, color, 3)

     #print(outs)
     imS = cv2.resize(frame, (960, 540))
     cap.release()
     cv2.imshow("Image", imS)
     key = cv2.waitKey(5)
     if key == 27:
           break
cap.release()
cv2.destroyAllWindows()

     
