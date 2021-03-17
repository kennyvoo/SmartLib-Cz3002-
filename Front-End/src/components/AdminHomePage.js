import React, {useContext, useState} from "react";
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
import L5C1 from "./Img/L5C1.jpg";
import Component from "@reactions/component";
import {SelectedSeatContext} from "../contexts/SelectSeatContext";
import {SeatContext} from "../contexts/SeatContext";
import CamSeatsList from "./seatmap/CamSeatsList";
import SeatsList from "./seatmap/SeatsList";
import './AdminPageStyles.css'

function AdminHomePage(){

    const [seats, setSeats] = useContext(SeatContext);
    const [selected, setSelected] = useContext(SelectedSeatContext);

    function cameraSelect(level)
    {
        switch (level) {
            case 2:
                return L2C1;
            case 3:
                return L3C1;
            case 4:
                return L4C1;
            case 5:
                return L5C1;
        }
    }

    return(
        <Pane className={'bgPane'}>
            <div>
                <h2 className={'heading'}>Admin Homepage</h2>
                {/* Segmented Control Bar*/}
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
                <Pane className={'masterPane'} border={'none'}>
                    <Pane className={'alertsPane'} border={'default'}>
                        <h2 className={'sectionHeading'}>Alerts</h2>
                    </Pane>
                    <Pane className={'homepageMapComboPane'} border={'default'}>
                        <h2 className={'sectionHeading'}>Live Status</h2>
                        <Pane className={'cameraPane'} backgroundImage={`url(${cameraSelect(selected.level)})`}>
                            <CamSeatsList seats={seats} editmode={false}/>
                        </Pane>
                        <Pane className={'seatMapPane'} border={'none'}>
                            <SeatsList seats={seats} editmode={false}/>
                        </Pane>
                    </Pane>
                </Pane>
            </div>

        </Pane>

    );
}

export default AdminHomePage;