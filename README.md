## SmartLib : An intelligent library seat management system

SmartLib is an intelligent system aimed to improve the experience at the libraries across Nanyang Technological University. Its main purpose is to address the issue of locating empty seats/booths at the libraries as well as mitigating seat hogging. 

The main features are listed as:
* Seat occupancy detection using camera
* Check availability of seats
* Reserve a seat, and
* Librarian to manage seats
* Alert the librarian if there's any seat hogging 
* Data analysis

## Dependencies
1. Python 3.7.7
2. opencv 4.5.1
3. firebase-admin 4.5.2
4. npm 7.6.0

## Installation
1.gitclone this repo.

2.Follow the setup instruction in [detection system](/Detection%20System/README.md) to setup the detection system

3.Follow the setup instruction in [SmartLib](/SmartLib/readme.md) to setup the frontend and backend


&nbsp;

## How to Run?
```python
1. cd SmartLib && npm run dev
2. cd Detection_System && python Detection.py
```
  *2 seperate terminal*
&nbsp;

## TODO
- [X] Frontend Development
- [X] Backend Development
- [X] Detection System Development
- [ ] Deploying to server

&nbsp;

### Some images to illustrate the application
* **Live Seat Updates**
  ![Live Seat Updates](/README_images/SeatChange.gif)
    Seat status will be updated based on the seat status retrieved from firestore

&nbsp;
* **Seat Booking**

    ![Seat Booking](/README_images/SeatBooking.gif)
    Students is able to book a seat with just a few clicks

&nbsp;
 * **Admin Dashboard**

    ![Seat Booking](/README_images/AdminDashboard.gif)
    Admin is able to view the live feed from the cameras and there's an additional alerts panel that will show all the hogged seats 

&nbsp;
 * **Modify Seat**

    ![Modify Seat](/README_images/ModifySeat.gif)
    Admin is able to modify(including delete) status,location and bounding box of every individual seat in the library

&nbsp;
 * **Add Seat**

    ![Add Seat](/README_images/Add-seat2.gif)
    Admin is able to add extra seat easily.


&nbsp;
 * **Report Generation**

    ![Report](/README_images/report.png)
    Admin is able to generate and download seat occupancy report 


