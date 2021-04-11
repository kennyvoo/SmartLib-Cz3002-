//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: ModifySeatsPage.js                                                                                        //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Modify Seat Page. The seat information and selection information is passed          //
//            with the use of React context. This component includes other components such as SeatsList,                //
//            CamSeatsList.                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useContext, useEffect, useState} from "react";
import {
    Pane,
    Text,
    Button,
    SelectField,
    SegmentedControl,
    TextInputField,
    ResetIcon,
    SearchIcon,
    Checkbox,
    TrashIcon,
    EditIcon, toaster,
} from "evergreen-ui";
import Component from "@reactions/component";
import {SelectedSeatContext} from "../../contexts/SelectSeatContext";
import {SeatContext} from "../../contexts/SeatContext";
import CamSeatsList from "../common/seatmap/CamSeatsList";
import SeatsList from "../common/seatmap/SeatsList";
import './AdminPageStyles.css'
import crudFirebase from '../../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import mapSelect from "../Configuration/MapSelect";
import cameraSelect from "../Configuration/CamSelect";
import Loading from "../common/Loading";


function ModifySeatsPage(){

    const [seats, setSeats] = useContext(SeatContext);
    const [selected, setSelected] = useContext(SelectedSeatContext);
    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Seats'));
    const [tempSeats, setTempSeats]=useState([{...seats}]);
    const [checked, setChecked] = useState();
    const [status, setStatus]=useState({value: ''});
    const defaultSeat = {
        id: '',
        level: '',
        seatName: '',
        cameraId: '',
        x1Img: 0,
        y1Img: 0,
        x2Img: 0,
        y2Img: 0,
        xLoc: 0,
        yLoc: 0,
        status: '',
        unavailable: false
    }
    const [selSeat, setSelSeat]=useState(defaultSeat)

    // useEffect upon [dataFS] trigger
    useEffect(()=> {
        if(!loading&&dataFS) {
            //console.log(dataFS.docs);
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            console.log(events);
            setSeats(events);
            setTempSeats(events);
        }
    },[dataFS]);

    // useEffect upon [tempSeats] trigger
    useEffect(() => {console.log('tempSeats:'); console.log(tempSeats)}, [tempSeats]);

    // useEffect upon [seats] trigger
    useEffect(() => {console.log('seats:'); console.log(seats);}, [seats]);

    // useEffect upon [selSeat] trigger
    useEffect(() => {console.log('selSeat:'); console.log(selSeat)}, [selSeat]);

    // useEffect upon [selected] trigger
    useEffect(()=>{
        console.log('selected: id: '+selected.id+' lvl: '+selected.level);
        refresh();
    },[selected])

    // Update relevant states after input trigger
    const handleChange = (e) => {
        const { id, value } = e.target
        setSelSeat(prevState => ({
            ...prevState,
            [id]: value.toString()
        }))
    }

    // PUT modified seat to Firebase CRUD
    function modifySeat()
    {
        //setSeats(prev=>[...prev, selSeat])
        crudFirebase.update('Seats',selSeat.id,selSeat);
        //alert("Successfully Modified");
        toaster.success('Seat has been successfully modified');
    }

    // DELETE selected seat from Firebase CRUD
    function deleteSeat()
    {
        // seats.find((seat)=>seat.id==selected.seat)
        crudFirebase.remove('Seats',selSeat.id);
        //alert("Successfully Deleted");
        toaster.warning('Seat has been permanently deleted');
    }

    // Preview changes without updating database
    function previewSeat()
    {
        console.log("preview clicked")
        let found = seats.find((seat)=>(seat.id===selSeat.id));
        let index=seats.indexOf(found);
        console.log('found',found)
        console.log('index',index)
        console.log('selSeat.id.toString()',selSeat.id.toString());
        if(index!= null) {
            console.log("index found")
            setTempSeats(()=>{
                let temp=tempSeats;
                temp.splice(index,1,selSeat)
                setTempSeats(temp);
            });
        }
    }

    // Reset preview / any input changes
    function resetSeat()
    {
        setTempSeats(seats);
        setSelSeat(defaultSeat);
        refresh();
    }

    // Refresh displayed seats
    function refresh(){
        const seat = seats.find((seat)=>seat.id==selected.seat.toString());
        if(seat!=null) {
            console.log('Found', seat)
            setSelSeat(seat);
            setChecked(seat.unavailable);
            setStatus({value: seat.status});
        }
        else setSelSeat(defaultSeat);
    }

    return(
        !loading&&seats?
        <Pane className={'bgPane'}>
            <div>
                <h2 className={'heading'}>Modify / Delete Seat</h2>
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
                                onChange={(value) => { setState({ value }); setSelected({seat:0, level: value }); }}
                            />
                        )}
                    </Component>
                </Pane>
                <Pane className={'selectionInfoPane'}>
                    <p className={'selectionText'}>Selected Seat ID: {selSeat.id} </p>
                    <p className={'selectionText'}>Level: { selected.level }</p>
                    <p className={'selectionText'}>Seat Name: {selSeat.seatName}</p>
                </Pane>
                <Pane className={'masterPane'} border={'none'}>
                    <Pane className={'cameraControlPane'} border={'default'}>
                        <Pane className={'cameraPane'} backgroundImage={`url(${cameraSelect(selected.level)})`}>
                            <CamSeatsList seats={tempSeats} editmode={true}/>
                        </Pane>
                        <Pane className={'infoPane'} paddingBottom={20}>
                            <Text className={'infoText'}>cameraId: {selSeat.cameraId}</Text>
                            <Text className={'infoText'}>x1Img: {selSeat.x1Img}</Text>
                            <Text className={'infoText'}>y1Img: {selSeat.y1Img}</Text>
                            <Text className={'infoText'}>x2Img: {selSeat.x2Img}</Text>
                            <Text className={'infoText'}>y2Img: {selSeat.y2Img}</Text>
                        </Pane>
                        <Pane className={'inputPane'}>
                            <TextInputField
                                className={'inputFieldBox'}
                                id="cameraId" label="cameraId :" placeholder="eg. LWN_L2_C1"
                                value={selSeat.cameraId} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="x1Img" label="x1 :" placeholder="0-1920"
                                value={selSeat.x1Img} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="y1Img" label="y1 :" placeholder="0-1080"
                                value={selSeat.y1Img} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="x2Img" label="x2 :" placeholder="0-1920"
                                value={selSeat.x2Img} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="y2Img" label="y2 :" placeholder="0-1080"
                                value={selSeat.y2Img} onChange={handleChange}
                            />
                        </Pane>
                    </Pane>
                    <Pane className={'seatMapControlPane'} border={'default'}>
                        <Pane className={'seatMapPane'} border={'none'} backgroundImage={`url(${mapSelect(selected.level)})`}>
                            <SeatsList seats={tempSeats} editmode={true}/>
                        </Pane>
                        <Pane className={'infoPane'}>
                            <Text className={'infoText'}>id: {selSeat.id}</Text>
                            <Text className={'infoText'}>level: {selSeat.level}</Text>
                            <Text className={'infoText'}>seatName: {selSeat.seatName}</Text>
                        </Pane>
                        <Pane className={'infoPane'} paddingBottom={20}>
                            <Text className={'infoText'}>xLoc: {selSeat.xLoc}</Text>
                            <Text className={'infoText'}>yLoc: {selSeat.yLoc}</Text>
                            <Text className={'infoText'}>status: {selSeat.status}</Text>
                            <Text className={'infoText'}>unavailable: {selSeat.unavailable?'true':'false'}</Text>
                        </Pane>
                        <Pane className={'inputPane'}>
                            <TextInputField
                                className={'inputFieldBox'}
                                id="id" label="id :" placeholder="UID"
                                value={selSeat.id} onChange={handleChange} disabled
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="level" label="Level :" placeholder="2-5"
                                value={selSeat.level} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="seatName" label="Seat Name :" placeholder="eg. LWN-L2-13"
                                value={selSeat.seatName} onChange={handleChange}
                            />
                        </Pane>
                        <Pane className={'inputPane'}>
                            <TextInputField
                                className={'inputFieldBox'}
                                id="xLoc" label="xLoc :" placeholder="0-800"
                                value={selSeat.xLoc} onChange={handleChange}
                            />
                            <TextInputField
                                className={'inputFieldBox'}
                                id="yLoc" label="yLoc :" placeholder="0-800"
                                value={selSeat.yLoc} onChange={handleChange}
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

                            <Component initialState={{ checked: selSeat.unavailable }}>
                                {({ state, setState }) => (
                                    <Checkbox
                                        className={'checkBox'}
                                        label="Unavailable"
                                        checked={checked}
                                        onChange={e => {setState({ checked: e.target.checked }); setSelSeat(prevState => ({...prevState, unavailable: !state.checked})); setChecked(!state.checked) }}
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
                    <Button className={'button'} onClick={deleteSeat} marginRight={16} appearance="primary" intent={"danger"} iconBefore={TrashIcon}>Delete Seat</Button>
                </Pane>
            </div>
        </Pane>:
            <Loading/>

    );
}

export default ModifySeatsPage;