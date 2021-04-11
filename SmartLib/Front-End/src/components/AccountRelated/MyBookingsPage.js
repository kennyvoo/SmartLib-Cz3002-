//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: MyBookingsPage.js                                                                                         //
//    Author: Irsyad                                                                                                    //
//  Function: Displays library user current bookings and booking history. This component will fetch both information    //
//            from firestore cloud database by using the observer pattern; only updating the component if a change is   //
//            detected from the database. This is done thru Firestore snapshot function and React useEffect() method.   //
//            Currently, if the seat in the user's current booking data field is detected to have its occupancy status  //
//            change from reserved to available, it will consider that the user has reached the seat and will           //
//            automatically migrate this seat data from the current booking database to the user's booking history      //
//            database. The rendering will also get updated accordingly.                                                //
//                                                                                                                      //
//            However, on the real implementation, we would design it in a way that if that once the user books the     //
//            seat, the seat occupancy status will change from available to reserved status, so that no one else        //
//            will occupy that seat. Then, if the user were to occupy the seat within 15 mins, the seat status will     //
//            change from reserved to occupied, then the seat information migrates from the user's current booking      //
//            to booking history. If the user fails to do so, the system will automatically remove the seat from        //
//            the user's current booking database and set the seat occupancy status to available, indicating that       //
//            the user fails to secure the seat and will have to book the seat again.                                   //
//                                                                                                                      //                                                                                          
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect, useContext } from "react";
import { Pane, Text, Heading, Table, Menu, Popover, MoreIcon, IconButton, Position, Dialog } from "evergreen-ui";
import background from "./../Img/MyBookings.jpg";
import Component from "@reactions/component";
import crudFirebase from '../../services/crudFirebase'
import { useAuth } from '../../contexts/AuthContext'
import app from '../../services/firebase'

export default function MyBookingsPage() {

  const { currentUser } = useAuth()
  const [currentBooking, setCurrentBooking] = useState()
  const [bookingHistory, setBookingHistory] = useState([])

  function observeChange() {
    try {
      app.firestore().collection('Seats').doc(currentBooking.seatID).onSnapshot((doc) => {
        let seat = doc.data()
        if (seat.status == "Available") {
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
          } else {
          console.log("Updated data: ", seat);
        }
      });
    } catch {
      console.log("Fail to detect available");
    }
  }

  const fetchBookingHistory = async () => {
    app.firestore().collection('User_Booking').doc(currentUser.uid).collection('Bookings').doc('Booking_History').collection('History').onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          setBookingHistory(bookingHistory => [...bookingHistory, change.doc.data()])
          console.log('New addition: ', change.doc.data());
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

  async function handleChange() {
    await crudFirebase.removebooking(currentUser.uid)
    setCurrentBooking()
  }

  /* To display the current booking datafield */
  function checkBooking() {
    try {
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
                    onConfirm={handleChange}
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
  /* DEBUG MESSAGE */
  console.log("Current:", currentBooking);
  console.log("History:", bookingHistory);

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Notes:                                                                                                          //
//             - Line 37: The observe change function is to observe for any changes to the seat occupancy status        //
//                        of the current user booking                                                                   //
//            - Line 100: The user's current booking datafield is separated from the standard table section to          //
//                        accomodate the options menu that is tied to the field to allow users to delete their          //
//                        current booking.                                                                              //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
