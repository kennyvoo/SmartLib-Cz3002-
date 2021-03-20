import React, {useContext, useEffect, useState} from "react";
import { Pane, Text, Button, Heading, SegmentedControl } from "evergreen-ui";
import { Link } from "react-router-dom";
import MapSelectorPane from "./MapSelectorPane";
import firebase from '../services/firebase';
import './HomePage.css'
import Stats from "./Stats";
import Component from "@reactions/component";
import {SeatContext} from "../contexts/SeatContext";
import {SelectedSeatContext} from "../contexts/SelectSeatContext";
import crudFirebase from '../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";

function HomePage() {
  const [seats, setSeats] = useContext(SeatContext);
  const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Seats'));
  const [selected, setSelected] = useContext(SelectedSeatContext);
  const [statsSel, setStatsSel]=useState({val: 0});

  useEffect(()=> {
    if(!loading&&dataFS) {
      //console.log(dataFS.docs);
      let events = [];
      dataFS.forEach((doc) => events.push(doc.data()));
      console.log(events);
      setSeats(events);
    }
  },[dataFS]);

  return (
      !loading&&seats?
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
          <Pane className={'masterPane'}>
            <Pane className={'statsPane'} border={'default'}>
              <h2 className={'sectionHeading'}>Statistics</h2>
              {/* Segmented Control Bar*/}
              <Pane className={'segmentedControlPane'}>
                <Component
                    initialState={{
                      options: [
                        { label: "Overall", value: 0 },
                        { label: "Level 2", value: 2 },
                        { label: "Level 3", value: 3 },
                        { label: "Level 4", value: 4 },
                        { label: "Level 5", value: 5 },
                      ],
                      value: 0,
                    }}
                >
                  {({ state, setState }) => (
                      <SegmentedControl
                          className={'segmentedControl'}
                          options={state.options}
                          value={state.value}
                          onChange={(value) => { setState({ value }); setStatsSel({val: value})}}
                      />
                  )}
                </Component>
              </Pane>
              <Stats statsSel={statsSel} seats={seats}/>
            </Pane>
            <Pane className={'mapSelectorPane'} border="default">
              <h2 className={'sectionHeading'}>Live Seat Map</h2>
              <MapSelectorPane />
            </Pane>
          </Pane>



          {/*<Pane>*/}
          {/*  <Link to="/SeatInformation" style={{ textDecoration: "none" }}>*/}
          {/*    <Button marginRight={16} appearance="primary" intent="success">Test</Button>*/}
          {/*  </Link>*/}
          {/*  <Button marginRight={16} appearance="primary" intent="warning">Booked</Button>*/}
          {/*</Pane>*/}
        </div>
      </Pane>

    </div>:
          <h1>Loading</h1>
  );
}

export default HomePage;
