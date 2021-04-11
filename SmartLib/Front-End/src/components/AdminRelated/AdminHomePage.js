//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: AdminHomePage.js                                                                                          //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Admin HomePage. The seat information and selection information is passed            //
//            with the use of React context. This component includes other components such as SeatsList, CamSeatsList   //
//            Stats, AlertList.                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useContext, useState, useEffect} from "react";
import {
    Pane,
    SegmentedControl,
} from "evergreen-ui";
import Component from "@reactions/component";
import {SelectedSeatContext} from "../../contexts/SelectSeatContext";
import {SeatContext} from "../../contexts/SeatContext";
import CamSeatsList from "../common/seatmap/CamSeatsList";
import SeatsList from "../common/seatmap/SeatsList";
import './AdminPageStyles.css'
import Stats from "../common/Stats";
import AlertList from "./AlertList";
import crudFirebase from '../../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import Legend from "../common/seatmap/Legend";
import cameraSelect from "../Configuration/CamSelect";
import mapSelect from "../Configuration/MapSelect";
import Loading from "../common/Loading";

function AdminHomePage(){

    const [seats, setSeats] = useContext(SeatContext);
    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Seats'));
    const [selected, setSelected] = useContext(SelectedSeatContext);

    // useEffect upon [dataFS] trigger
    useEffect(()=> {
        if(!loading&&dataFS) {
            //console.log(dataFS.docs);
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            console.log(events);
            setSeats(events);
        }
    },[dataFS]);

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
                        <Pane className={'cameraPane'}
                              backgroundImage={`url(${cameraSelect(selected.level)})`}
                        >
                            <CamSeatsList seats={seats} editmode={false}/>
                        </Pane>
                        <Pane className={'seatMapPane'} border={'none'} backgroundImage={`url(${mapSelect(selected.level)})`}>
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
            <Loading/>

    );
}

export default AdminHomePage;