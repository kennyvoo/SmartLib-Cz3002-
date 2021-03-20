import React, { useState, useEffect } from "react";
import { Pane, Text, Button, Heading, Table, Menu, Popover, MoreIcon, IconButton, Position } from "evergreen-ui";
//import currentBooking from './JsonTestFiles/currentBooking.json'
//import bookingHistory from './JsonTestFiles/bookingHistory.json'
import background from "./Img/MyBookings.jpg";
import crudFirebase from '../services/crudFirebase'
import { useAuth } from '../context/AuthContext'
import app from '../firebase'

export default function MyBookingsPage() {

  const { currentUser } = useAuth()
  const test = crudFirebase.checkbooking(currentUser.uid, 'Booking_Current')
  //const [booking, setBooking] = useState({"bookingID": "", "timeStamp": "", "seatName": ""})
  //const currentBooking = {}
  const [currentBooking, setCurrentBooking] = useState([])
  const [bookingHistory, setBookingHistory] = useState([])

  // test.then((doc) => {
  //   const a = doc.data()
  //   let title = a["seatName"] as? String ?? ""
  //    setBooking({"seatName": a.seatName})
  //    console.log("Document test:", a.seatName);
  //    console.log("Document data:", doc.data());

  //   })
  //   console.log("Document data:", booking);

  const fetchBookings = async () => {
    // const response=db.collection('Blogs');
    const Reference = app.firestore().collection('User_Booking').doc(currentUser.uid).collection('Bookings')
    const DocData = await Reference.doc('Booking_Current').get()
    // const data=await response.get();
   
    setCurrentBooking([DocData.data()])

    const Reference1 = app.firestore().collection('User_Booking').doc(currentUser.uid).collection('Bookings').doc('Booking_History').collection('History')
    const DocData1 = await Reference1.get()
    DocData1.docs.forEach(item=>{
    setBookingHistory(bookingHistory => [...bookingHistory, item.data()])
    })
  }

  useEffect(() => {
    fetchBookings();
  }, [])



  /* Options Menu For Current Booking Table */
  // renderRowMenu = () => {
  //   return (
  //     <Menu>
  //       <Menu.Group>
  //         <Menu.Item>Share...</Menu.Item>
  //       </Menu.Group>
  //       <Menu.Divider />
  //       <Menu.Group>
  //         <Menu.Item intent="danger">Delete...</Menu.Item>
  //       </Menu.Group>
  //     </Menu>
  //   )
  // }

  console.log("Document data:", currentBooking);
  console.log("Document data:", bookingHistory);

  return (
    <div>
      <Pane backgroundImage={`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color={'white'}>My Bookings</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>View your past seat bookings</Text>
      </Pane>

      {/* Current Booking Table */}
      <Pane backgroundColor="beige" justifyContent="center" padding={16}>
        <Heading size={600} marginBottom={16}>Current Booking</Heading>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>
              Booking ID
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Date & Time
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Seat Name
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody height={50}>
            {currentBooking.map(profile => (
              <Table.Row>
                <Table.TextCell>{profile.bookingID}</Table.TextCell>
                <Table.TextCell>{profile.timeStamp}</Table.TextCell>
                <Table.TextCell>
                  {profile.seatName}
                </Table.TextCell>
                {/* <Table.Cell width={48} flex="none">
                    <Popover
                      content={this.renderRowMenu} key={profile.id}
                      position={Position.BOTTOM_RIGHT}
                    >
                      <IconButton icon={MoreIcon} height={24} appearance="minimal" />
                    </Popover>
                  </Table.Cell> */}
              </Table.Row>
            ))}
          </Table.VirtualBody>
        </Table>
      </Pane>

      {/* Booking History Table */}
      <Pane backgroundColor="beige" justifyContent="center" padding={20}>
        <Heading size={600} marginBottom={16}>Booking History</Heading>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>
              Booking ID
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Date & Time
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Seat ID
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody height={140}>
            {bookingHistory && bookingHistory.map(bookingHistory => (
              <Table.Row key={bookingHistory.id} isSelectable onSelect={() => alert("Seat #" + bookingHistory.seatName)}>
                <Table.TextCell>{bookingHistory.bookingID}</Table.TextCell>
                <Table.TextCell>{bookingHistory.timeStamp}</Table.TextCell>
                <Table.TextCell>
                  {bookingHistory.seatName}
                </Table.TextCell>
              </Table.Row>
            ))}
          </Table.VirtualBody>
        </Table>
      </Pane>
    </div>
  );
}
