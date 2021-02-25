import React, { useState } from "react";
import { Pane, Text, Button, Heading, SegmentedControl } from "evergreen-ui";
import { Link } from "react-router-dom";

function HomePage() {
  const [state, setState] = useState({
    options: [
      { label: "Level 2", value: "lvl2" },
      { label: "Level 3", value: "lvl3" },
      { label: "Level 4", value: "lvl4" },
      { label: "Level 5", value: "lvl5" },
    ],
    value: "lvl2",
  });

  return (
    <div>
      <Pane
        height={1000}
        backgroundColor="white"
        display="flex"
        justifyContent="center"
        padding={20}
      >
        <div>
          <Pane
            height="auto"
            width="auto"
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
            background="none"
            display="flex"
            justifyContent="center"
            padding={15}
            border="default"
            borderRadius={5}
          >
            <div>
              <SegmentedControl
                width={600}
                options={state.options}
                value={state.value}
              //   onChange={(value) => setState(value)}
              />
              <Pane
                height={400}
                width="auto"
                marginTop={20}
                background="tint2"
                border="default"
                borderRadius={5}
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                <Heading size={600}>Map</Heading>
              </Pane>
            </div>
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
