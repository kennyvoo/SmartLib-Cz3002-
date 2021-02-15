#https://github.com/DhrumilParikh-github/ObjectDetection-without-GPU

import cv2
import numpy as np
import time
import os


# Load Yolo

net = cv2.dnn.readNet("yolov3.weights", "yolov3.cfg")
classes = []
with open("coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]
layer_names = net.getLayerNames()
print(layer_names)
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
print(output_layers)
colors = np.random.uniform(0, 255, size=(len(classes), 3))

cap = cv2.VideoCapture(0)

font = cv2.FONT_HERSHEY_PLAIN
starting_time = time.time()
frame_id = 0
Databases=[0,0]
while True:
    _, frame = cap.read()
    frame_id += 1

    height, width, channels = frame.shape

    class_ids = []
    confidences = []
    boxes = []

    # retrive Seats Status
    Seats=Databases


    init=0
    half=int(width/2)

    for i in range(2):
        blob = cv2.dnn.blobFromImage(frame[:,init:init+half], 0.00392, (416, 416), (0, 0, 0), True, crop=False)
        net.setInput(blob)
        outs = net.forward(output_layers)


        detection_check=0

        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if confidence > 0.6:
                    # Object detected
                    center_x = int(detection[0] * half)+init
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * half)
                    h = int(detection[3] * height)
                    # Rectangle coordinates
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)
                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)
                    detection_check=1
                    if classes[class_id]=="person" and Seats[i]!=1:
                        print("seat "+str(i) +" : Occupied")
                        Databases[i]=1
                        print("Database updated")
                        break
                    elif Seats[i]!=2:
                        print("seat "+ str(i) +" : Chopped")
                        Databases[i]=2
                        print("Database updated")

        if (len(outs)==0 or detection_check==0) and Seats[i]!=0:
            Databases[i]=0
            print("Database updated")
        init+=half

    

    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.8, 0.3)

    for i in range(len(boxes)):
            if i in indexes:
                x, y, w, h = boxes[i]
                label = str(classes[class_ids[i]])
                confidence = confidences[i]
                color = colors[class_ids[i]]
                cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
                cv2.putText(frame, label + " " + str(round(confidence, 2)), (x, y + 30), font, 2, color, 2)



    elapsed_time = time.time() - starting_time
    fps = frame_id / elapsed_time
    cv2.line(frame,(int(width/2),0),(int(width/2),height),(255,0,0),2)
    cv2.putText(frame, "FPS: " + str(round(fps, 2)), (10, 50), font, 2, (0, 0, 0), 2)
    cv2.imshow("Image", frame)
    key = cv2.waitKey(5)
    print(Databases)
    if key == 27:
        break

cap.release()
cv2.destroyAllWindows()