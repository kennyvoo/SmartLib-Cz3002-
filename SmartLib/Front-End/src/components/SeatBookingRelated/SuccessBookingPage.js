//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: SuccessBookingPage.js                                                                                     //
//    Author: Irsyad                                                                                                    //
//  Function: Diplay the booking confirmation page to the user. It will also display the seat information based on      //
//            what user selected in the homepage. The seat information is passed with the use of React context.         //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React,{ useContext} from "react";
import { Pane, Text, Heading, Strong } from "evergreen-ui";
import background from "./../Img/success.png";
import { SelectedSeatContext } from '../../contexts/SelectSeatContext';

function SuccessBookingPage() {

    const [selected, setSelected] = useContext(SelectedSeatContext);

    return (
      <div>

        {/* Current Booking Table */}
        <Pane backgroundImage={`url(${background})`} 
            height="auto"
            width="auto"
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            padding={80} 
            flexDirection="column">
        <Heading fontSize={100} color={'white'}>Congrats !</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>Your seat has been successfully booked !</Text>
        <Text size={400} color={'white'}><br></br>The booking confirmation has been sent</Text>
        <Text size={400} color={'white'}>to your email.</Text>
        <Text size={400} color={'white'}>You may also check your bookings in 'My Bookings' page </Text>
      </Pane>
      <Pane
            height="auto"
            width="auto"
            background="none"
            display="flex"
            flexDirection="column" 
            alignItems="center"
            justifyContent="center"
            padding={16}
          >
            <Pane backgroundColor={""}>
          <Heading size={900} padding={20}>Your Booking</Heading>
            <Pane marginTop={16}>
              <Strong size={600} >Location:</Strong>
              <Text size={600} marginLeft={8} >Lee Wee Nam Library</Text>
            </Pane>
            <Pane marginTop={16}>
              <Strong size={600} >Seat Number:</Strong>
              <Text size={600} marginLeft={8} >{selected.seatname}</Text>
            </Pane>
            <Pane marginTop={16}>
              <Strong size={600} >Level:</Strong>
              <Text size={600} marginLeft={8} >{selected.level}</Text>
            </Pane>
            <Pane marginTop={16}>
              <Strong size={600} >Date-Time:</Strong>
              <Text size={600} marginLeft={8} >{selected.timestamp}</Text>
            </Pane>
            <Pane marginTop={16}>
              <Strong size={600} >Booking ID:</Strong>
              <Text size={600} marginLeft={8} >{selected.bookingID}</Text>
            </Pane>
            </Pane>
        </Pane>
      </div>
    );
} 

export default SuccessBookingPage;
