import React, { useState } from "react";
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
  Popover,
  Menu,
  Position,
  toaster,
  PeopleIcon,
  CircleArrowRightIcon,
  EditIcon,
  TrashIcon,
  SmallCrossIcon,
  UndoIcon,
  TimeIcon,
  AsteriskIcon,
  Alert,
  CaretDownIcon, AddIcon,
} from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";
import { useAuth } from "../context/AuthContext"

export default function Navbar() {

  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try {
      await logout()
      history.push("/Login")
    } catch {
    }
  }

  return (
    <Pane display="flex" padding={0} background="grey" borderRadius={0}>
      <Pane flex={1} alignItems="center" display="flex" paddingLeft={7}>
        {/* <IconButton icon={ListIcon} margin={10} appearance="default" /> */}
        <IoLibraryOutline size={30} color="white" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Heading marginRight={5} marginLeft={5} size={700} color="white">
            SmartLib
          </Heading>
        </Link>
      </Pane>
      <Pane backgroundColor="none">

        {currentUser ? <Pane>
          {(currentUser.email.includes("admin")) ? 
          <Pane>
            <Link to="/Admin" style={{ textDecoration: "none" }}>
              <Button margin={8} appearance="primary">
              Home
              </Button>
            </Link>
            <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                    <Link to="/ModifySeats" style={{ textDecoration: "none" }}>
                      <Menu.Item icon={EditIcon}>Modify / Remove Seats</Menu.Item>
                    </Link>
                    <Link to="/AddSeats" style={{ textDecoration: "none" }}>
                      <Menu.Item icon={AddIcon}>Add New Seat</Menu.Item>
                    </Link>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item icon={UndoIcon} intent="danger" onClick={handleLogout}>
                    Sign Out
                </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          > 
            <Button margin={8} iconAfter={CaretDownIcon}>My Account</Button>
          </Popover>
          <Avatar name={currentUser.email} size={30} margin={8} alignItems="center" />

          </Pane> : <Pane>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button margin={8} appearance="primary">
              Home
          </Button>
          </Link>
          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                    <Link to="/MyBookings" style={{ textDecoration: "none" }}>
                      <Menu.Item icon={TimeIcon}>My Bookings</Menu.Item>
                    </Link>
                    <Link to="/Account" style={{ textDecoration: "none" }}>
                      <Menu.Item icon={PeopleIcon}>Account Settings</Menu.Item>
                    </Link>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item icon={UndoIcon} intent="danger" onClick={handleLogout}>
                    Sign Out
                </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Button margin={8} iconAfter={CaretDownIcon}>My Account</Button>
          </Popover>
          <Avatar name={currentUser.email} size={30} margin={8} alignItems="center" />
            </Pane>}
          

        </Pane> : <Pane>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button margin={8} appearance="primary">
              Home
          </Button>
          </Link>
          <Link to="/CreateAccount" style={{ textDecoration: "none" }}>
            <Button margin={8} appearance="primary">
              Create Account
          </Button>
          </Link>
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <Button margin={8} appearance="primary" intent="success">
              Login
          </Button>
          </Link>
        </Pane>}
      </Pane>
    </Pane >
  );
}

