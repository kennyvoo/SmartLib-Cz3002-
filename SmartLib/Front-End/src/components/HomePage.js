import React, {useContext, useEffect, useState} from "react";
import { Pane, Text, Button, Heading, SegmentedControl } from "evergreen-ui";
import MapSelectorPane from "./MapSelectorPane";
import './HomePage.css'
import Stats from "./AdminRelated/Stats";
import {SeatContext} from "../contexts/SeatContext";
import crudFirebase from '../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "./Loading";

function HomePage() {
  const [seats, setSeats] = useContext(SeatContext);
  const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Seats'));

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
          <Pane className={'headingPane'}>
            <h1>Welcome to Lee Wee Nam Library</h1>
          </Pane>
          <Pane className={'masterPane'}>
            <Pane className={'statsPane'} border={'default'}>
              <h2 className={'sectionHeading'}>Statistics</h2>

              <Stats seats={seats}/>
            </Pane>
            <Pane className={'mapSelectorPane'} border="default">
              <h2 className={'sectionHeading'}>Live Seat Map</h2>
              <MapSelectorPane />
            </Pane>
          </Pane>
        </div>
      </Pane>

    </div>:
          <Loading/>
  );
}

export default HomePage;
