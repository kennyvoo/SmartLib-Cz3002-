import React, { useContext, useState } from "react";
import { Pane, Text, Alert, Button, Heading, Paragraph, TextInputField, FormField, Avatar, BackButton, CrossIcon, InfoSignIcon, EditIcon, WarningSignIcon, Dialog } from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import Component from "@reactions/component";
import background from "./Img/Stress.png";
import { SelectedSeatContext } from '../contexts/SelectSeatContext';
import crudFirebase from '../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import axios from 'axios';
import { useAuth } from '../context/AuthContext'
import app from '../firebase'

function SeatInformationPage() {

  const [selected, setSelected] = useContext(SelectedSeatContext);
  const { currentUser } = useAuth()
  const history = useHistory()
  const [error, setError] = useState('')

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;

  function handleBook() {

    crudFirebase.update('Seats', (selected.seat).toString(), { status: 'Reserved' });
    const test = crudFirebase.checkbooking(currentUser.uid, 'Booking_Current')
    //app.firestore().collection('User_Booking').doc(currentUser.uid).collection('Bookings').doc('Booking_Current').get()
    test.then((doc) => {
      if (!doc.exists) {
        console.log("Document data:", doc.data());
        crudFirebase.bookingSetup(currentUser.uid, 'Booking_Current', { bookingID: "", seatName: (selected.seat).toString(), timeStamp: dateTime });
        console.log("New")
        setError('')
        axios({
          method: "POST",
          url: "http://localhost:4000/api/sendEmail",
          data: {
            name: "test",
            subject: "test",
            //email: "taiwilson5@gmail.com",
    
            // Generate Booking ID and time of booking + 15 mins to the email
            //IP config app on android, just change the camera capture url on 2 components, only on lvl 4
          }
        }).then((response) => {
          console.log(response.data.msg)
        })
        history.push("/BookingSuccessful")
      } else {
        console.log("Booking alr exist")
        return setError('You already have a booking. Please check in My Bookings page.')
      }
    })
    //console.log('Document data:', ta);

    // try {
    //   crudFirebase.booking(currentUser.uid, 'Booking_Current', { seatName: (selected.seat).toString() });
    //   console.log("update")
    // } catch {

    // }

    
    
  }

  return (
    <div>
      {/* Back Button */}
      <Pane paddingBottom={20}>
        <Link to="/" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text */}
          <BackButton marginLeft={16} marginTop={16} intent="success" height={48} />
        </Link>
      </Pane>

      {(error != '') ? (<Pane display="flex" justifyContent="center">
        <Alert
          intent="danger"
          title={error}
        />
      </Pane>) : (<Pane></Pane>)}

      {/* Seat description including avatar*/}
      <Pane display="flex" padding={16} borderRadius={3} marginTop={20}> {/* Parent class, defiines the row*/}
        <Pane padding={16} alignItems="center" marginLeft={60} > {/* Children class, defiines the column*/}
          <Avatar isSolid name="S 1" size={300} />
        </Pane>
        <Pane flex={1} display="flex" marginLeft={30} padding={16}>
          <Pane padding={16}>
            <Pane flex={1} display="flex">

              <Pane>
                <InfoSignIcon color="info" marginRight={16} size={30} />
              </Pane>
              <Heading size={800} >Seat {selected.seat}</Heading>
            </Pane>
            <Pane>
              <Heading size={800} >Description</Heading>
            </Pane>
            <Pane marginTop={16}>
              <Text size={600}>- Some description about the chair location(Powered/Aircon etc)<br></br> - This box should be dynamic depending on the id of the seat.
              </Text>
            </Pane>

            {/* Booking Button*/}
            <Pane display="flex" marginTop={100}>
              <Pane flex={1} alignItems="center" display="flex">
                <WarningSignIcon color="warning" size={30} marginRight={16} />
                <Heading size={600} color={"red"}>Please be at your seat by 15 mins<br></br>
                or your booking will be terminated</Heading>
              </Pane>
              <Button appearance="primary" height={48} onClick={handleBook}>Book</Button>
            </Pane>

          </Pane>
        </Pane>
      </Pane>
    </div>
  );
}

export default SeatInformationPage;
