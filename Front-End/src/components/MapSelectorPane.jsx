import React, { useState } from "react";
import { Pane, Text, Button, Heading, SegmentedControl } from "evergreen-ui";
import SeatMap from "./seatmap/SeatMap";
import Component from "@reactions/component";

class MapSelectorPane extends React.Component {
    
  render() {
    return (
      <div>
        <Component
          initialState={{
            options: [
              { label: "Level 2", value: "2" },
              { label: "Level 3", value: "3" },
              { label: "Level 4", value: "4" },
              { label: "Level 5", value: "5" },
            ],
            value: "2",
          }}
        >
          {({ state, setState }) => (
            <SegmentedControl
              width="auto"
              options={state.options}
              value={state.value}
              onChange={(value) => setState({ value })}
            />
          )}
        </Component>
        <Pane
          height="60vw"
          width="60vw"
          marginTop={20}
          background="tint2"
          border="default"
          borderRadius={5}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          {/* <Heading size={600}>Map</Heading> */}
          <SeatMap />
        </Pane>
            <h2>Selected Seat: {}</h2>
      </div>
    );
  }
}

export default MapSelectorPane;
