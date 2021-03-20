import React, {useContext, useState, useEffect} from "react";
import {
    Pane,
    Text,
    Button,
    Heading,
    SegmentedControl,
    TextInput,
    TextInputField,
    AddIcon,
    ResetIcon,
    SearchIcon,
    EditIcon, DeleteIcon
} from "evergreen-ui";
import { Link } from "react-router-dom";
import L2C1 from "./Img/L2C1.jpg";
import L3C1 from "./Img/L3C1.jpg";
import L4C1 from "./Img/L4C1.jpg";
import Component from "@reactions/component";
import {SelectedSeatContext} from "../contexts/SelectSeatContext";
import {SeatContext} from "../contexts/SeatContext";
import CamSeatsList from "./seatmap/CamSeatsList";
import SeatsList from "./seatmap/SeatsList";
import './AdminPageStyles.css'
import Stats from "./Stats";
import AlertList from "./AlertList";
import crudFirebase from '../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import Legend from "./seatmap/Legend";

function AdminHomePage(){

    const [seats, setSeats] = useContext(SeatContext);
    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Seats'));
    const [selected, setSelected] = useContext(SelectedSeatContext);

    useEffect(()=> {
        if(!loading&&dataFS) {
            //console.log(dataFS.docs);
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            console.log(events);
            setSeats(events);
        }
    },[dataFS]);


    function cameraSelect(level)
    {
        switch (level) {
            case 2:
                return L2C1;
            case 3:
                return L3C1;
            case 4:
                //return L4C1;
                return 'http://10.27.35.143:8080/video';
            case 5:
                //return L5C1;
                //return 'https://www.homengardeningtips.com/wp-content/uploads/library-seating.jpg';
                return 'http://10.27.168.181:8080/video';
        }
    }

    return(
        !loading&&seats?
        <Pane className={'bgPane'}>
            <div>
                <h2 className={'heading'}>Admin Homepage</h2>
                <Pane className={'masterPane'} border={'none'}>
                    <Pane className={'statsPane'} border={'default'}>
                        <h2 className={'sectionHeading'}>Statistics</h2>
                        <Stats seats={seats}/>
                    </Pane>
                    <Pane className={'homepageMapComboPane'} border={'default'}>
                        <h2 className={'sectionHeading'}>Live Status</h2>
                        <Pane className={'segmentedControlPane'}>
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
                                        className={'segmentedControl'}
                                        options={state.options}
                                        value={state.value}
                                        onChange={(value) => { setState({ value }); setSelected({seat:0, level: value });}}
                                    />
                                )}
                            </Component>
                        </Pane>
                        <Pane className={'cameraPane'}
                              // backgroundImage={`url("http://10.27.35.143:8080/video")`}
                              backgroundImage={`url(${cameraSelect(selected.level)})`}
                        >
                            <CamSeatsList seats={seats} editmode={false}/>
                        </Pane>
                        <Pane className={'seatMapPane'} border={'none'}>
                            <SeatsList seats={seats} editmode={false}/>
                        </Pane>
                        <Pane border={'default'} borderRadius={5} marginTop={10} padding={10}>
                            <Legend/>
                        </Pane>
                    </Pane>
                    <Pane className={'alertsPane'} border={'default'}>
                        <h2 className={'sectionHeading'}>Alerts</h2>
                        <AlertList seats={seats}/>
                    </Pane>
                </Pane>
            </div>

        </Pane>
            :
            <h1>Loading</h1>

    );
}

export default AdminHomePage;