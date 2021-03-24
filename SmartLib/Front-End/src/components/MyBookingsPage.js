import React, { useState, useEffect, useContext } from "react";
import { Pane, Text, Heading, Table, Menu, Popover, MoreIcon, IconButton, Position, Dialog } from "evergreen-ui";
import background from "./Img/MyBookings.jpg";
import Component from "@reactions/component";
import crudFirebase from '../services/crudFirebase'
import { useAuth } from '../context/AuthContext'
import { SeatContext } from "../contexts/SeatContext";
import app from '../firebase'

export default function MyBookingsPage() {

  const { currentUser } = useAuth()
  const [seats, setSeats] = useContext(SeatContext);
  const [currentBooking, setCurrentBooking] = useState()
  const [emptyBit, setEmptyBit] = useState(false)
  const [bookingHistory, setBookingHistory] = useState([])

  function observeChange() {
    try {
      app.firestore().collection('Seats').doc(currentBooking.seatID).onSnapshot((doc) => {
        let a = doc.data()
        if (a.status == "Available") {
          const data = {
            bookingID: currentBooking.bookingID,
            level: currentBooking.level,
            seatID: currentBooking.seatID,
            seatName: currentBooking.seatName,
            timeStamp: currentBooking.timeStamp
          }
          handleChange()
          crudFirebase.bookingHistorySetup(currentUser.uid, data)
          setCurrentBooking()
        // } else if(a.status == "Available") {
        //     handleChange()
          } else {
          console.log("Updated data: ", a);
        }
      });
    } catch {
      console.log("Fail to detect occupied");
    }
  }

  const fetchBookingHistory = async () => {
    //const Reference2 = app.firestore().collection('User_Booking').doc(currentUser.uid).collection('Bookings').doc('Booking_History').collection('History')
    // const DocData2 = await Reference2.get()
    // DocData2.docs.forEach(item => {
    //   setBookingHistory(bookingHistory => [...bookingHistory, item.data()])
    // })
    app.firestore().collection('User_Booking').doc(currentUser.uid).collection('Bookings').doc('Booking_History').collection('History').onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          setBookingHistory(bookingHistory => [...bookingHistory, change.doc.data()])
          console.log('New city: ', change.doc.data());
        }
      });
    });
  }

  const fetchBookings = async () => {
    try {
      const Reference = app.firestore().collection('User_Booking').doc(currentUser.uid).collection('Bookings')
      const DocData = await Reference.doc('Booking_Current').get()
      setCurrentBooking(DocData.data())

    } catch {
      console.log(currentBooking);
      console.log("empty");
    }
  }

  useEffect(() => {
    fetchBookings();
  }, [])

  useEffect(() => {
    fetchBookingHistory();
  }, [])

  useEffect(() => {
    observeChange();
  }, [currentBooking])

  async function handleDelete() {
    await crudFirebase.removebooking(currentUser.uid)
    //crudFirebase.update('Seats', (currentBooking.seatID).toString(), { status: 'Available' });
    setCurrentBooking()
  }

  async function handleChange() {
    await crudFirebase.removebooking(currentUser.uid)
    setCurrentBooking()
  }

  function checkBooking() {
    try {
      console.log("works");

      return (

        <div>
          <Table.Row>
            <Table.TextCell>{currentBooking.bookingID}</Table.TextCell>
            <Table.TextCell>{currentBooking.timeStamp}</Table.TextCell>
            <Table.TextCell>
              Lee Wee Nam Library
            </Table.TextCell>
            <Table.TextCell>
              {currentBooking.level}
            </Table.TextCell>
            <Table.TextCell>
              {currentBooking.seatName}
            </Table.TextCell>
            <Table.Cell width={48} flex="none">
              <Popover
                content={renderRowMenu}
                position={Position.BOTTOM_RIGHT}
              >
                <IconButton icon={MoreIcon} height={24} appearance="minimal" />
              </Popover>
            </Table.Cell>
          </Table.Row>
        </div>
      )
    } catch {
      console.log("Empty Current Booking");
      return
    }

  }

  /* Options Menu For Current Booking Table */
  const renderRowMenu = () => {
    return (
      <div>
        <Menu>
          <Menu.Group>
            <Menu.Item>Share...</Menu.Item>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <Component initialState={{ isShown: false }}>
              {({ state, setState }) => (
                <Pane>
                  <Dialog
                    isShown={state.isShown}
                    title="Delete Current Booking"
                    intent="danger"
                    onCloseComplete={() => setState({ isShown: false })}
                    confirmLabel="Delete"
                    onConfirm={handleDelete}
                  >
                    Are you sure you want to delete your current booking?
          </Dialog>
                  <Menu.Item intent="danger" onClick={() => setState({ isShown: true })}>Delete...</Menu.Item>
                </Pane>
              )}
            </Component>

          </Menu.Group>
        </Menu>
      </div>
    )
  }

  console.log("Current:", currentBooking);
  console.log("History:", bookingHistory);
  console.log("Seats:", seats);
  console.log("emptyBit:", emptyBit);

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
              Location
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Level
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Seat ID
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody height={50}>
            {checkBooking()}
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
              Location
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Level
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Seat ID
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody height={240}>
            {bookingHistory && bookingHistory.map(bookingHistory => (
              <Table.Row key={bookingHistory.id} isSelectable onSelect={() => alert("Seat #" + bookingHistory.seatName)}>
                <Table.TextCell>{bookingHistory.bookingID}</Table.TextCell>
                <Table.TextCell>{bookingHistory.timeStamp}</Table.TextCell>
                <Table.TextCell>Lee Wee Nam</Table.TextCell>
                <Table.TextCell>{bookingHistory.level}</Table.TextCell>
                <Table.TextCell>{bookingHistory.seatName}</Table.TextCell>
              </Table.Row>
            ))}
          </Table.VirtualBody>
        </Table>
      </Pane>
    </div>
  );
}
