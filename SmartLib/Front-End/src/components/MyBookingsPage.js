import React from "react";
import { Pane, Text, Button, Heading, Table, Menu, Popover, MoreIcon, IconButton, Position } from "evergreen-ui";
import currentBooking from './JsonTestFiles/currentBooking.json'
import bookingHistory from './JsonTestFiles/bookingHistory.json'
import background from "./Img/MyBookings.jpg";

export default class MyBookingsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  /* Options Menu For Current Booking Table */
  renderRowMenu = () => {
    return (
      <Menu>
        <Menu.Group>
          <Menu.Item>Share...</Menu.Item>
        </Menu.Group>
        <Menu.Divider />
        <Menu.Group>
          <Menu.Item intent="danger">Delete...</Menu.Item>
        </Menu.Group>
      </Menu>
    )
  }

  /* Table Render for both tables */
  render() {

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
                Seat ID
            </Table.TextHeaderCell>
              <Table.TextHeaderCell>
                Ratings
            </Table.TextHeaderCell>
            </Table.Head>
            <Table.VirtualBody height={50}>
              {currentBooking.map(profile => (
                <Table.Row key={profile.id}>
                  <Table.TextCell>{profile.identification}</Table.TextCell>
                  <Table.TextCell>{profile.timeBooked}</Table.TextCell>
                  <Table.TextCell isNumber>
                    {profile.seatID}
                  </Table.TextCell>
                  <Table.TextCell isNumber>
                    {profile.ratings}
                  </Table.TextCell>
                  <Table.Cell width={48} flex="none">
                    <Popover
                      content={this.renderRowMenu}
                      position={Position.BOTTOM_RIGHT}
                    >
                      <IconButton icon={MoreIcon} height={24} appearance="minimal" />
                    </Popover>
                  </Table.Cell>
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
              <Table.TextHeaderCell>
                Ratings
            </Table.TextHeaderCell>
            </Table.Head>
            <Table.VirtualBody height={140}>
              {bookingHistory.map(bookingHistory => (
                <Table.Row key={bookingHistory.id} isSelectable onSelect={() => alert("Seat #" + bookingHistory.seatID)}>
                  <Table.TextCell>{bookingHistory.identification}</Table.TextCell>
                  <Table.TextCell>{bookingHistory.timeBooked}</Table.TextCell>
                  <Table.TextCell isNumber>
                    {bookingHistory.seatID}
                  </Table.TextCell>
                  <Table.TextCell isNumber>
                    {bookingHistory.ratings}
                  </Table.TextCell>
                </Table.Row>
              ))}
            </Table.VirtualBody>
          </Table>
        </Pane>
      </div>
    );
  }
} 
