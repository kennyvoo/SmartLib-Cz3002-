import React from "react";
import { Pane, Text, Button, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Pane display="flex" padding={16} background="grey" borderRadius={0}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={700} color="white">
          SmartLib
        </Heading>
      </Pane>
      <Pane backgroundColor="none">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button marginRight={16}>Home</Button>
        </Link>
        <Link to="/MyBookings" style={{ textDecoration: 'none' }}>
          <Button marginRight={16}>My Bookings</Button>
        </Link>
        <Link to="/Account" style={{ textDecoration: 'none' }}>
          <Button marginRight={16}>Account Management</Button>
        </Link>
        <Link to="/Login" style={{ textDecoration: 'none' }}>
          <Button appearance="primary">Login</Button>
        </Link>
      </Pane>
    </Pane>
  );
}

export default Navbar;
