import React from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInputField, FormField, TextInput} from "evergreen-ui";
import { Link } from "react-router-dom";
import background from "./Img/ResetPwd.jpg";

function AdminPage() {
  return (
    <div>
      <Pane backgroundImage = {`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color = {'white'}>SmartLib</Heading>
        <Text size={600} color = {'white'}><br></br><br></br><br></br>Where student meet seats</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        <form>
        <Heading size={800} >Admin Page</Heading>
        <Text><br></br></Text>
        {/* This is the container/pane for the login section */}
        <Pane display="flex">
          <Pane flex={1} alignItems="center" display="flex"></Pane> {/* In Order to keep the button on right side */}
          <Pane paddingBottom={20}>
            <Link to="/" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text */}
                <Button appearance="primary" intent="success" height={48}>Some button</Button>
            </Link>
          </Pane>
        </Pane>
        </form>
      </Pane>
    </div>
  );
}

export default AdminPage;
