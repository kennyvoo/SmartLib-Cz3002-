import React, { useState } from "react";
import { Pane, Text, Button, Heading, SegmentedControl } from "evergreen-ui";
import { Link } from "react-router-dom";
import MapSelectorPane from "./MapSelectorPane";
import firebase from '../services/firebase';
import './HomePage.css'

function HomePage() {

  return (
    <div>
      <Pane className={'bgPane'}>
        <div>
          <Pane
            height="auto"
            width="95vw"
            background="none"
            display="flex"
            justifyContent="center"
            padding={15}
          >
            <Heading size={800} marginBottom={10}>
              Welcome to Lee Wee Nam Library
            </Heading>
          </Pane>
          <Pane
            height="auto"
            width="auto"
            maxWidth={900}
            background="none"
            display="flex"
            justifyContent="center"
            padding={15}
            margin={"auto"}
            border="default"
            borderRadius={5}
          >
            <MapSelectorPane />
          </Pane>
          <Pane>
            <Link to="/SeatInformation" style={{ textDecoration: "none" }}>
              <Button marginRight={16} appearance="primary" intent="success">Test</Button>
            </Link>
            <Button marginRight={16} appearance="primary" intent="warning">Booked</Button>
          </Pane>
        </div>
      </Pane>

    </div>
  );
}

export default HomePage;
