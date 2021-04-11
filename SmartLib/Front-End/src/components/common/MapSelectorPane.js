//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: MapSelectorPane.js                                                                                        //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Map Selector Pane. Contains components such as SeatsList to display seat map and    //
//            elements to facilitate seat selection and booking process.                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from "react";
import { Pane, Button, SegmentedControl, Dialog, ErrorIcon, HandUpIcon } from "evergreen-ui";
import Component from "@reactions/component";
import { SeatContext } from '../../contexts/SeatContext';
import { SelectedSeatContext } from '../../contexts/SelectSeatContext';
import { useHistory } from "react-router-dom";
import SeatsList from "./seatmap/SeatsList";
import Legend from "./seatmap/Legend";
import '../HomePage.css'
import mapSelect from "../Configuration/MapSelect";

function MapSelectorPane() {
  
  const [seats, setSeats] = useContext(SeatContext);
  const [selected, setSelected] = useContext(SelectedSeatContext);
  const history = useHistory();

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
