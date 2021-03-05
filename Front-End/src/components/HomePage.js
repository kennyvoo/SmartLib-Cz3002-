import React, { useState } from "react";
import { Pane, Text, Button, Heading, SegmentedControl } from "evergreen-ui";
import { Link } from "react-router-dom";
import MapSelectorPane from "./MapSelectorPane";

function HomePage() {

  return (
    <div>
      <Pane
        height='auto'
        backgroundColor="white"
        display="flex"
        justifyContent="center"
        padding={20}
      >
        <div>
          <Pane
            height="auto"
            width="70vw"
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
            width="65vw"
            background="none"
            display="flex"
            justifyContent="center"
            padding={15}
            border="default"
            borderRadius={5}
          >
            <MapSelectorPane />
          </Pane>
          <Pane>
            <Link to="/SeatInformation" style={{ textDecoration: "none" }}>
              <Button marginRight={16} appearance="primary" intent="warning">Test</Button>
            </Link>
          </Pane>
        </div>
      </Pane>

    </div>
  );
}

export default HomePage;
