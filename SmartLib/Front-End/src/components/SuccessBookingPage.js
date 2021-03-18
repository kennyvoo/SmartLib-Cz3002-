import React,{ useContext} from "react";
import { Pane, Text, Button, Heading, Table, Menu, Popover, MoreIcon, IconButton, Position } from "evergreen-ui";
import currentBooking from './JsonTestFiles/currentBooking.json'
import bookingHistory from './JsonTestFiles/bookingHistory.json'
import background from "./Img/MyBookings.jpg";
import { SelectedSeatContext } from '../contexts/SelectSeatContext';

function SuccessBookingPage() {

    const [selected, setSelected] = useContext(SelectedSeatContext);

    return (
      <div>

        {/* Current Booking Table */}
        <Pane backgroundColor="beige" justifyContent="center" padding={16}>
          <Heading fontSize={50} padding={8}>Your Booking</Heading>
          <Heading size={400} padding={8} ><br></br>Booking Confirmation will be sent to your email</Heading>
          <Pane flex={1} display="flex" padding={16}>
              <Pane>
                <Heading size={600} >Seat Number:</Heading>
              </Pane>
              <Heading size={600} marginLeft={10}>{selected.seat}</Heading>
          </Pane>
          <Pane flex={1} display="flex" padding={16}>
              <Pane>
                <Heading size={600} >Date-Time:</Heading>
              </Pane>
              <Heading size={600} marginLeft={10}>date</Heading>
          </Pane>
          <Pane flex={1} display="flex" padding={16}>
              <Pane>
                <Heading size={600} >Booking-ID:</Heading>
              </Pane>
              <Heading size={600} marginLeft={10}>serial</Heading>
          </Pane>
        </Pane>
      </div>
    );
} 

export default SuccessBookingPage;
