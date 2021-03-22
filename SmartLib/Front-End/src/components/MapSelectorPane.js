import React, { useState, useContext } from "react";
import { Pane, Text, Button, Heading, SegmentedControl, Dialog, ErrorIcon, HandUpIcon } from "evergreen-ui";
import Component from "@reactions/component";
import { SeatContext } from '../contexts/SeatContext';
import { SelectedSeatContext } from '../contexts/SelectSeatContext';
import { useHistory } from "react-router-dom";
import SeatsList from "./seatmap/SeatsList";
import Legend from "./seatmap/Legend";
import './HomePage.css'
import mapSelect from "./MapSelect";

function MapSelectorPane() {
  
  const [seats, setSeats] = useContext(SeatContext);
  const [selected, setSelected] = useContext(SelectedSeatContext);
  const history = useHistory();
  
  function occupancy(keyword) {
    let avail = 0;
    let total = seats.length;
    let i;
    for (i = 0; i < seats.length; i++){
      if (seats[i].status === keyword) avail++;
    }
    return (avail/total*100);
  }

  function countSeats(keyword) {
    let num = 0;
    let i;
    for (i = 0; i < seats.length; i++){
        if(keyword==='Unavailable') if(seats[i].unavailable===true) num++;
        else if (seats[i].status === keyword && seats[i].unavailable===false) num++;

    }
    return (num);
  }

  function clickBook() {
    console.log("Booked");
    setSeats()
    history.push('/SeatInformation');
  }

    return (
      <div>
        {/* Segmented Control*/}
        <Pane className={'segmentedControlPane'}>
            <Component
              initialState={{
                options: [
                  { label: "Level 2", value: '2' },
                  { label: "Level 3", value: '3' },
                  { label: "Level 4", value: '4' },
                  { label: "Level 5", value: '5' },
                ],
                value: selected.level,
              }}
            >
              {({ state, setState }) => (
                <SegmentedControl
                    className={'segmentedControl'}
                    options={state.options}
                    value={state.value}
                    onChange={(value) => { setState({ value }); setSelected({seat:0, level: value });}}
                />
              )}
            </Component>
        </Pane>
        <Pane
            className={'mapPane'}
          height="auto"
          width="auto"
          marginTop={10}
          borderRadius={5}
          justifyContent="center"
          alignItems="center"
          display="flex"
          backgroundImage={`url(${mapSelect(selected.level)})`}
        >
            <SeatsList seats={seats} editmode={false}/>
        </Pane>

          <Pane border={'default'} borderRadius={5} marginTop={10} padding={10}>
              <Legend/>
          </Pane>
          {/*<Heading padding={10} size={700}>The library has {seats.length} seats in total.</Heading>*/}
          {/*<Heading padding={10} size={700}>The library has {countSeats('Available')} available seats, {countSeats('Reserved')} reserved seats, {countSeats('Occupied')} occupied seats, {countSeats('Hogged')} hogged seats, {countSeats('Unavailable')} unavailable seats.</Heading>*/}

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

                <Pane className={'bookingPane'} border={'default'} padding={10} borderRadius={5} marginTop={10}>
                    <h2 className={'sectionHeading'}>Seat Reservation</h2>
                    <p className={'seatInfoText'}>Selected Seat: {(selected.seat == 0) ? 'None' : (seats.find((seat) => seat.id == selected.seat)).seatName}</p>
                    <p className={'seatInfoText'}>Level: { selected.level }</p>
                    <Pane className={'buttonPane'} display={"flex"} justifyContent={"center"}>
                      <Button
                        appearance="primary"
                        iconBefore={HandUpIcon}
                        height={40}
                        disabled={selected.seat == 0}
                        onClick={() => ((seats.find((theSeat) => theSeat.id == selected.seat)).status != "Available") || ((seats.find((theSeat) => theSeat.id == selected.seat)).unavailable === true) ? setState({ isShown: true }) : clickBook()}
                      >
                        Book
                      </Button>
                    </Pane>
                </Pane>
            </Pane>
          )}
        </Component>
      </div>
    );
}

export default MapSelectorPane;
