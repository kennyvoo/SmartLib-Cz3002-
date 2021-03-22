import React, { useContext, useState } from "react";
import { Pane, Text, Alert, Button, Heading, Strong, Avatar, BackButton, InfoSignIcon, WarningSignIcon } from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import { SelectedSeatContext } from '../contexts/SelectSeatContext';
import { SeatContext } from '../contexts/SeatContext'
import crudFirebase from '../services/crudFirebase'
import axios from 'axios';
import { useAuth } from '../context/AuthContext'
import { v1 as uuidv1 } from 'uuid';

function SeatInformationPage() {

  const [selected, setSelected] = useContext(SelectedSeatContext);
  const [seats, setSeats] = useContext(SeatContext);
  const { currentUser } = useAuth()
  const history = useHistory()
  const [error, setError] = useState('')

  function splitNames() {
    let n = (selected.seatname).split("_S");
    return n[n.length - 1];
  }

  function handleBook() {

    // Check if user has an existing booking first
    const test = crudFirebase.checkbooking(currentUser.uid, 'Booking_Current')
    test.then((doc) => {
      if (!doc.exists) {
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + ' ' + time;

        let id = uuidv1();
        let temp1 = selected.seat;
        let temp2 = selected.level;
        let tempName = splitNames()

        crudFirebase.update('Seats', (selected.seat).toString(), { status: 'Reserved' });
        crudFirebase.bookingSetup(currentUser.uid, 'Booking_Current', { bookingID: id, seatID: temp1, seatName: tempName, level: temp2, timeStamp: dateTime});
        setSelected({seat:temp1, seatname: tempName, level: temp2, timestamp: dateTime, bookingID: id})
        console.log("New")
        console.log(currentUser.email)
        setError('')
        axios({
          method: "POST",
          url: "http://localhost:4000/api/sendEmail",
          data: {
            name: currentUser.displayName,
            // subject: "test",
            email: currentUser.email,
            // email: "taiwilson5@gmail.com",
            // seat: (seats.find((theSeat) => theSeat.id == selected.seat.toString())).seatName
            seat: "Seat " + tempName

            // Generate Booking ID and time of booking + 15 mins to the email
            //IP config app on android, just change the camera capture url on 2 components, only on lvl 4
          }
        }).then((response) => {
          console.log(response.data.msg)
          console.log("debug",seats)
          console.log(selected)
        })
        // Start reservation checker
        axios({
          method: "POST",
          url: "http://localhost:4000/api/reservationChecker",
          data: {
            seatID: (selected.seat).toString(),
            uid: currentUser.uid
          }
        }).then((response) => {
          console.log(response.data.msg)
        })
        history.push("/BookingSuccessful")
      } else {
        console.log("Booking alr exist")
        return setError('You already have an existing booking.')
      }
    })
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
          appearance="card"  
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
              <Heading size={800} >Seat {splitNames()}</Heading>
            </Pane>
            <Pane marginTop={16}>
              <Heading size={800} >Description</Heading>
            </Pane>
            <Pane marginTop={16}>
              <Strong size={600} >Location:</Strong>
              <Text size={600} marginLeft={8} >Lee Wee Nam Library</Text>
            </Pane>
            <Pane>
              <Strong size={600} >Level:</Strong>
              <Text size={600} marginLeft={8} >{selected.level}</Text>
            </Pane>
            <Pane>
              <Strong size={600} >Aircon:</Strong>
              <Text size={600} marginLeft={8} >Yes</Text>
            </Pane>

            {/* Booking Button*/}
            <Pane display="flex" marginTop={80}>
              <Pane flex={1} alignItems="center" display="flex">
                <WarningSignIcon color="warning" size={30} marginRight={16} />
                <Heading size={600} color={"red"}>Please be at your seat in 15 mins<br></br>
                or your booking will be terminated.</Heading>
              </Pane>
              <Button appearance="primary" height={48} marginLeft={16} onClick={handleBook}>Book</Button>
            </Pane>

          </Pane>
        </Pane>
      </Pane>
    </div>
  );
}

export default SeatInformationPage;
