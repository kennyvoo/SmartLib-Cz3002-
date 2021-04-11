//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: AddSeatsPage.js                                                                                           //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Add Seat Page. The seat information and selection information is passed             //
//            with the use of React context. This component includes other components such as SeatsList,                //
//            DrawAnnotations.                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useContext, useEffect, useState} from "react";
import {
    Pane,
    Text,
    Button,
    SegmentedControl,
    TextInputField,
    AddIcon,
    ResetIcon,
    SearchIcon,
    Checkbox,
    SelectField,
    toaster
} from "evergreen-ui";
import Component from "@reactions/component";
import {SelectedSeatContext} from "../../contexts/SelectSeatContext";
import {SeatContext} from "../../contexts/SeatContext";
import SeatsList from "../common/seatmap/SeatsList";
import './AdminPageStyles.css'
import crudFirebase from '../../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import DrawAnnotations from "../common/seatmap/CamKonva";
import cameraSelect from "../Configuration/CamSelect";
import mapSelect from "../Configuration/MapSelect";
import Loading from "../common/Loading";

function AddSeatsPage(){
    const [seats, setSeats] = useContext(SeatContext);
    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Seats'));
    const [selected, setSelected] = useContext(SelectedSeatContext);
    const [tempSeats, setTempSeats]=useState(seats);
    const [status, setStatus]=useState({value: ''});
    const defaultSeat = {
        id: generateUID(),
        level: selected.level.toString(),
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

    // useEffect upon [dataFS] trigger
    useEffect(()=> {
        if(!loading&&dataFS) {
            //console.log(dataFS.docs);
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            console.log('events: ',events);
            setSeats(events);
            setTempSeats(events);
        }
    },[dataFS]);

    // useEffect upon [selected] trigger
    useEffect(()=>{
        setNewSeat(prevState => ({
            ...prevState,
            x1Img: selected.drawX1,
            y1Img: selected.drawY1,
            x2Img: selected.drawX2,
            y2Img: selected.drawY2,
        }))
    },[selected])

    // Update relevant states after input trigger
    const handleChange = (e) => {
        const { id, value } = e.target
        setNewSeat(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    // Generates UID for newly created seat
    function generateUID(){
        let id=1;
        while(1)
        {
            if((seats.find((seat) => seat.id === id.toString()))==null) {
                console.log('id: '+id);
                return id.toString();
            }
            else id++;
        }
    }

    // POST new seat to Firebase CRUD
    function addSeat()
    {
        console.log("NEWSEATID",newSeat.id)
        crudFirebase.create('Seats',newSeat.id.toString(),newSeat);
        setNewSeat(defaultSeat);
        toaster.success('Seat has been successfully added');
    }

    // Preview changes without updating database
    function previewSeat()
    {
        setTempSeats(seats);
        setTempSeats(prev=>[...prev, newSeat])
        setSelected(prevState=>({...prevState,seat:newSeat.id}))
    }

    // Reset preview / any input changes
    function resetSeat()
    {
        setTempSeats(seats);
        setNewSeat(defaultSeat);
        setStatus({value: 'Available'});
    }

    // useEffect upon [tempSeats] trigger
    useEffect(() => {console.log('tempSeats',tempSeats)}, [tempSeats]);

    // useEffect upon [seats] trigger
    useEffect(() => {console.log('seats',seats); setNewSeat(prevState => ({...prevState,id: generateUID()}))}, [seats]);

    // useEffect upon [newSeat] trigger
    useEffect(() => {console.log('newSeat: ',newSeat)}, [newSeat]);

    return(
        !loading&&seats?
        <Pane className={'bgPane'}>
            <div>
                <h2 className={'heading'}>Add New Seat</h2>
                {/* Segmented Control Bar*/}
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
                                onChange={(value) =>
                                {
                                    setState({ value });
                                    setSelected({seat:0, level: value });
                                    setNewSeat(prevState => ({...prevState, level: value.toString()}));
                                }}
                            />
                        )}
                    </Component>
                </Pane>
                <Pane className={'masterPane'} border={'none'}>
                        <Pane className={'cameraControlPane'} border={'default'}>
                            <p className={'infoText1'}> Hint: Click and drag to draw bounding box</p>
                            <Pane className={'cameraPane'} backgroundImage={`url(${cameraSelect(selected.level)})`}>
                                <DrawAnnotations/>
                            </Pane>
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
                                    id="cameraId" label="cameraId :" placeholder="eg. LWN_L2_C2"
                                    value={newSeat.cameraId} onChange={handleChange}
                                />
                                <TextInputField
                                    className={'inputFieldBox'}
                                    id="x1Img" label="x1 :" placeholder="0-1920"
                                    value={newSeat.x1Img} onChange={handleChange}
                                />
                                <TextInputField
                                    className={'inputFieldBox'}
                                    id="y1Img" label="y1 :" placeholder="0-1080"
                                    value={newSeat.y1Img} onChange={handleChange}
                                />
                                <TextInputField
                                    className={'inputFieldBox'}
                                    id="x2Img" label="x2 :" placeholder="0-1920"
                                    value={newSeat.x2Img} onChange={handleChange}
                                />
                                <TextInputField
                                    className={'inputFieldBox'}
                                    id="y2Img" label="y2 :" placeholder="0-1080"
                                    value={newSeat.y2Img} onChange={handleChange}
                                />
                            </Pane>
                        </Pane>
                        <Pane className={'seatMapControlPane'} border={'default'}>
                            <Pane className={'seatMapPane'} border={'none'} backgroundImage={`url(${mapSelect(selected.level)})`}>
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
                                <SelectField
                                    id={'status'}
                                    className={'inputSelField'}
                                    label="Status:"
                                    onChange={handleChange}
                                    value={status.value}
                                    onChange={e => {setStatus({ value: e.target.value }); handleChange(e);}}
                                >
                                    <option value="Available" selected>Available</option>
                                    <option value="Occupied">Occupied</option>
                                    <option value="Reserved">Reserved</option>
                                    <option value="Hogged">Hogged</option>
                                </SelectField>
                                <Component initialState={{ checked: false }}>
                                    {({ state, setState }) => (
                                        <Checkbox
                                            className={'checkBox'}
                                            label="Unavailable"
                                            checked={state.checked}
                                            onChange={e => {setState({ checked: e.target.checked }); setNewSeat(prevState => ({...prevState, unavailable: !state.checked})); }}
                                        />
                                    )}
                                </Component>
                            </Pane>
                        </Pane>
                </Pane>
                <Pane className={'buttonPane'}>
                    <Button className={'button'} onClick={previewSeat} appearance="primary" iconBefore={SearchIcon}>Preview</Button>
                    <Button className={'button'} onClick={resetSeat} marginRight={16} appearance="primary" intent={"warning"} iconBefore={ResetIcon}>Reset</Button>
                    <Button className={'button'} onClick={addSeat} marginRight={16} appearance="primary" intent={"success"} iconBefore={AddIcon}>Add Seat</Button>
                </Pane>
            </div>

        </Pane>:
            <Loading/>

    );
}

export default AddSeatsPage;