import React, { useState, useContext } from "react";
import { Pane, Text, Button, Heading, SegmentedControl, Dialog, ErrorIcon, HandUpIcon } from "evergreen-ui";
import Component from "@reactions/component";
import { SeatContext } from '../contexts/SeatContext';
import { SelectedSeatContext } from '../contexts/SelectSeatContext';
import { useHistory } from "react-router-dom";
import SeatsList from "./seatmap/SeatsList";

function MapSelectorPane() {
  
  const [seats, setSeats] = useContext(SeatContext);
  const [selected, setSelected] = useContext(SelectedSeatContext);
  const history = useHistory();
  
  function occupancy(keyword) {
    var avail = 0;
    var total = seats.length;
    var i;
    for (i = 0; i < seats.length; i++){
      if (seats[i].status == keyword) avail++;
    }
    return (avail/total*100);
  }

  function countSeats(keyword) {
    var num = 0;
    var i;
    for (i = 0; i < seats.length; i++){
        if(keyword=='Unavailable')
        {
            if(seats[i].unavailable==true) num++;
        }
        else
        {
            if (seats[i].status == keyword && seats[i].unavailable==false) num++;
        }

    }
    return (num);
  }
  // console.log(seats[0].status);

  function clickBook() {
    console.log("Booked");
    history.push('/SeatInformation');
  }

    return (
      <div>
        <Heading padding={10} size={700}>The library has {seats.length} seats in total.</Heading>
        <Heading padding={10} size={700}>The library has {countSeats('Available')} available seats, {countSeats('Reserved')} reserved seats, {countSeats('Occupied')} occupied seats, {countSeats('Hogged')} hogged seats, {countSeats('Unavailable')} unavailable seats.</Heading>
        <Heading padding={10} size={700}>The library is currently {occupancy('Available')}% full.</Heading>
        
        {/* Segmented Control Bar*/}
        <Component
          initialState={{
            options: [
              { label: "Level 2", value: 2 },
              { label: "Level 3", value: 3 },
              { label: "Level 4", value: 4 },
              { label: "Level 5", value: 5 },
            ],
            value: selected.level,
          }}
        >
          {({ state, setState }) => (
            <SegmentedControl
              width="auto"
              marginTop={10}
              options={state.options}
              value={state.value}
              onChange={(value) => { setState({ value }); setSelected({seat:0, level: value });}}
            />
          )}
        </Component>
        
        <Pane
          height="70vw"
          width="70vw"
          marginTop={20}
          background="tint2"
          border="default"
          borderRadius={5}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
            <SeatsList seats={seats} editmode={false}/>
        </Pane>
        
        <h2>Selected Seat: {(selected.seat == 0) ? 'None' : selected.seat}</h2>
        <h2>Selected Level: { selected.level }</h2>
        
        {/* Book Button and Dialog */}
        <Component initialState={{ isShown: false }}>
          {({ state, setState }) => (
            <Pane>
              <Dialog
                isShown={state.isShown}
                //title={"Seat "+ (seats.find((theSeat) => theSeat.id == selected.seat)).status}
                title={"Seat Unavailable"}
                onCloseComplete={() => setState({ isShown: false })}
                //confirmLabel="Custom Label"
                hasFooter={false}
              >
                <ErrorIcon size={30} marginRight={10}/>The seat you have chosen is not available for booking. 
              </Dialog>

              <Button
                appearance="primary"
                iconBefore={HandUpIcon}
                height={40}
                disabled={selected.seat == 0}
                onClick={() => (seats.find((theSeat) => theSeat.id == selected.seat)).status != "Available" ? setState({ isShown: true }) : clickBook()}
              >
                Book
              </Button>
            </Pane>
          )}
        </Component>
      </div>
    );
}

export default MapSelectorPane;
