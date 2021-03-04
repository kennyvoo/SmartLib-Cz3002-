import React from "react";
import {
  Pane,
  Text,
  Button,
  Heading,
  ListIcon,
  IconButton,
  SideSheet,
  Paragraph,
  Avatar,
  WarningSignIcon,
} from "evergreen-ui";
import { Link } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let bookingButton;
    let accountButton;
    let createAccountBtn;
    let userAvatar;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      bookingButton = <MyBookingButton />;
      accountButton = <MyAccountButton />;
      userAvatar = <UserAvatar />;
      createAccountBtn = null;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      createAccountBtn = <CreateAccountButton />;
      bookingButton = null;
      accountButton = null;
      userAvatar = null;
    }

    return (
      <Pane display="flex" padding={0} background="grey" borderRadius={0}>

        {/* Clicking the SmartLib logo will lead to the homepage*/}
        <Pane flex={1} alignItems="center" display="flex">
          <IconButton icon={ListIcon} margin={10} appearance="default" />
          <Pane display="flex">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Pane flex={1} alignItems="center" display="flex">
                <IoLibraryOutline size={30} color="white" marginRight={16} />
                <Heading marginRight={5} marginLeft={5} size={700} color="white">
                  SmartLib
                </Heading>
              </Pane>
            </Link>
          </Pane>
        </Pane>

        {/* The rest of the buttons in the navbar*/}
        <Pane backgroundColor="none">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button margin={8}>Home</Button>
          </Link>
          <Link to="/MyBookings" style={{ textDecoration: "none" }}>
            {bookingButton}
          </Link>
          <Link to="/Account" style={{ textDecoration: "none" }}>
            {accountButton}
          </Link>
          <Link to="/Login" style={{ textDecoration: "none" }}>
            {button}
          </Link>
          <Link to="/CreateAccount" style={{ textDecoration: "none" }}>
            {createAccountBtn}
          </Link>
        </Pane>
          {userAvatar}
      </Pane>
    );
  }
}

function LoginButton(props) {
  return (
    <Button margin={8} appearance="primary" intent="success" onClick={props.onClick}>
      Login
    </Button>
  );
}

function LogoutButton(props) {
  return (
    <Button margin={8} appearance="primary" intent="primary" onClick={props.onClick}>
      Logout
    </Button>
  );
}

function MyBookingButton() {
  return (
    <Button margin={8}>My Bookings</Button>
  );
}

function MyAccountButton() {
  return (
    <Button margin={8}>My Account</Button>
  );
}

function CreateAccountButton() {
  return (
    <Button margin={8} appearance="primary">
      Create Account
    </Button>
  );
}

function UserAvatar() {
  return (
    <Avatar name="Hou Jing" size={30} margin={8} />
  );
}


