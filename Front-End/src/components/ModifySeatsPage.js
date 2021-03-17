import React, {useContext, useEffect, useState} from "react";
import {Pane, Text, Button, Heading, SegmentedControl, TextInput, TextInputField, AddIcon, ResetIcon, SearchIcon, Checkbox, TrashIcon, EditIcon} from "evergreen-ui";
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

function ModifySeatsPage(){

    const [seats, setSeats] = useContext(SeatContext);
    const [selected, setSelected] = useContext(SelectedSeatContext);
    const [tempSeats, setTempSeats]=useState(seats);
    const defaultSeat = {
        id: seats[seats.length-1].id+1,
        level: selected.level,
        seatName: '',
        cameraId: '',
        x1Img: 0,
        y1Img: 0,
        x2Img: 0,
        y2Img: 0,
        xLoc: 0,
        yLoc: 0,
        status: 'Available',
        unavailable: false
    }
    const [newSeat, setNewSeat]=useState(defaultSeat)

    const handleChange = (e) => {
        const { id, value } = e.target
        setNewSeat(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleCheckbox = (state)=>{
        setNewSeat(prevState => ({
            ...prevState,
            unavailable: state
        }))
    }

    function modifySeat()
    {
        setSeats(prev=>[...prev, newSeat])
        alert("Successfully Added");
    }

    function previewSeat()
    {
        setTempSeats(seats);
        setTempSeats(prev=>[...prev, newSeat])
        setSelected(prevState=>({...prevState,seat:newSeat.id}))
    }

    function resetSeat()
    {
        setTempSeats(seats);
        setNewSeat(defaultSeat);
    }

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

    useEffect(() => {console.log('tempSeats:'); console.log(tempSeats)}, [tempSeats]);
    useEffect(() => {console.log('seats:'); console.log(seats); setNewSeat(prevState => ({...prevState,id:seats[seats.length-1].id+1}))}, [seats]);
    useEffect(() => {console.log('newSeat:'); console.log(newSeat)}, [newSeat]);
    useEffect(()=>{console.log('selected: id: '+selected.id+' lvl: '+selected.level); },[selected])

    return(
        <Pane className={'bgPane'}>
            <div>
                <h2 className={'heading'}>Modify / Delete Seat</h2>
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
                                onChange={(value) => { setState({ value }); setSelected({seat:0, level: value }); setNewSeat(prevState => ({...prevState, level: value})); }}
                            />
                        )}
                    </Component>
                </Pane>
                <Pane className={'selectionInfoPane'}>
                    <p className={'selectionText'}>Selected Seat ID: {(selected.seat == 0) ? '-' : selected.seat} </p>
                    <p className={'selectionText'}>Level: { selected.level }</p>
                    <p className={'selectionText'}>Seat Name: { selected.seat==0?'-':(seats.find((seat)=>seat.id==selected.seat)).seatName}</p>
                </Pane>
                <Pane className={'masterPane'} border={'none'}>
                    <Pane className={'cameraControlPane'} border={'default'}>
                        <Pane className={'cameraPane'} backgroundImage={`url(${cameraSelect(selected.level)})`}>
                            <CamSeatsList seats={tempSeats} editmode={true}/>
                        </Pane>

                        {/*<Pane>*/}
                        {/*    <DrawRect/>*/}
                        {/*</Pane>*/}

                        <Pane className={'infoPane'} paddingBottom={20}>
                            <Text className={'infoText'}>cameraId: {newSeat.cameraId}</Text>
                            <Text className={'infoText'}>x1Img: {newSeat.x1Img}</Text>
                            <Text className={'infoText'}>y1Img: {newSeat.y1Img}</Text>
                            <Text className={'infoText'}>x2Img: {newSeat.x2Img}</Text>
                            <Text className={'infoText'}>y2Img: {newSeat.y2Img}</Text>
                        </Pane>
                        <Pane className={'inputPane'}>
                            <TextInputField
                                className={'inputFieldBox'}
                                id="cameraId" label="cameraId :" placeholder="eg. L2C1"
                                value={newSeat.cameraId} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="x1Img" label="x1 :" placeholder="0-1280"
                                value={newSeat.x1Img} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="y1Img" label="y1 :" placeholder="0-720"
                                value={newSeat.y1Img} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="x2Img" label="x2 :" placeholder="0-1280"
                                value={newSeat.x2Img} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="y2Img" label="y2 :" placeholder="0-720"
                                value={newSeat.y2Img} onChange={handleChange}
                            />
                        </Pane>
                    </Pane>
                    <Pane className={'seatMapControlPane'} border={'default'}>
                        <Pane className={'seatMapPane'} border={'none'}>
                            <SeatsList seats={tempSeats} editmode={true}/>
                        </Pane>
                        <Pane className={'infoPane'}>
                            <Text className={'infoText'}>id: {newSeat.id}</Text>
                            <Text className={'infoText'}>level: {newSeat.level}</Text>
                            <Text className={'infoText'}>seatName: {newSeat.seatName}</Text>
                        </Pane>
                        <Pane className={'infoPane'} paddingBottom={20}>
                            <Text className={'infoText'}>xLoc: {newSeat.xLoc}</Text>
                            <Text className={'infoText'}>yLoc: {newSeat.yLoc}</Text>
                            <Text className={'infoText'}>status: {newSeat.status}</Text>
                            <Text className={'infoText'}>unavailable: {newSeat.unavailable?'true':'false'}</Text>
                        </Pane>
                        <Pane className={'inputPane'}>
                            <TextInputField
                                className={'inputFieldBox'}
                                id="id" label="id :" placeholder="unique id"
                                value={newSeat.id} onChange={handleChange} disabled
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="level" label="Level :" placeholder="2-5"
                                value={newSeat.level} onChange={handleChange} disabled
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="seatName" label="Seat Name :" placeholder="eg. LWN-L2-13"
                                value={newSeat.seatName} onChange={handleChange}
                            />
                        </Pane>
                        <Pane className={'inputPane'}>
                            <TextInputField
                                className={'inputFieldBox'}
                                id="xLoc" label="xLoc :" placeholder="0-800"
                                value={newSeat.xLoc} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="yLoc" label="yLoc :" placeholder="0-800"
                                value={newSeat.yLoc} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="status" label="Status :" placeholder="eg. Available"
                                value={newSeat.status} onChange={handleChange} disabled
                            />
                            {/*<TextInputField*/}
                            {/*    className={'inputFieldBox'}*/}
                            {/*    id="unavailable" label="Unavailable :" placeholder="0-800"*/}
                            {/*    value={newSeat.unavailable} onChange={handleChange} disabled*/}
                            {/*/>*/}
                            <Component initialState={{ checked: false }}>
                                {({ state, setState }) => (
                                    <Checkbox
                                        label="Unavailable"
                                        checked={state.checked}
                                        onChange={e => {setState({ checked: e.target.checked }); setNewSeat(prevState => ({...prevState, unavailable: !state.checked})); }}
                                        margin={10}
                                        paddingTop={15}
                                    />
                                )}
                            </Component>
                        </Pane>
                    </Pane>
                </Pane>
                <Pane className={'buttonPane'}>
                    <Button className={'button'} onClick={previewSeat} appearance="primary" iconBefore={SearchIcon}>Preview</Button>
                    <Button className={'button'} onClick={resetSeat} marginRight={16} appearance="primary" intent={"warning"} iconBefore={ResetIcon}>Reset</Button>
                    <Button className={'button'} onClick={modifySeat} marginRight={16} appearance="primary" intent={"success"} iconBefore={EditIcon}>Modify Seat</Button>
                    <Button className={'button'} onClick={modifySeat} marginRight={16} appearance="primary" intent={"danger"} iconBefore={TrashIcon}>Delete Seat</Button>
                </Pane>
            </div>

        </Pane>

    );
}

export default ModifySeatsPage;