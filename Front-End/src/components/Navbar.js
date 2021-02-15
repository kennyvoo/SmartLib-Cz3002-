import { React } from "react";
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
} from "evergreen-ui";
import { Link } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";

function Navbar() {
  return (
    <Pane display="flex" padding={0} background="grey" borderRadius={0}>
      <Pane flex={1} alignItems="center" display="flex">
        <IconButton icon={ListIcon} margin={10} appearance="default" />
        <IoLibraryOutline size={30} color="white"/>
        <Heading marginRight={5} marginLeft={5} size={700} color="white">
          SmartLib
        </Heading>
      </Pane>
      <Pane backgroundColor="none">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button margin={8}>Home</Button>
        </Link>
        <Link to="/MyBookings" style={{ textDecoration: "none" }}>
          <Button margin={8}>My Bookings</Button>
        </Link>
        <Link to="/Account" style={{ textDecoration: "none" }}>
          <Button margin={8}>My Account</Button>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <Button margin={8} appearance="primary">
            Login
          </Button>
        </Link>
      </Pane>
      <Avatar name="Hou Jing" size={30} margin={8} />
    </Pane>
  );
}

export default Navbar;
