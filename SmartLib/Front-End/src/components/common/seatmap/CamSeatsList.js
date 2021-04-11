//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: CamSeatList.js                                                                                            //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports rendered SVG element of the entire seat mapping on the camera image.                              //
//            Individual seat elements are rendered using CamSeat                                                       //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from 'react'
import CamSeat from "./CamSeat";
import { SelectedSeatContext, SelectSeatContext } from '../../../contexts/SelectSeatContext';
import GridLines from "./GridLines";

export function CamSeatsList(props) {
    
    const [select, setSelect] = useContext(SelectedSeatContext);

    // Show GridLines is edit mode is true.
    function editMode(mode)
    {
        if(mode) return <GridLines/>
    }
    return (
        <svg width="80vw" viewBox="0 0 1920 1080">
            {editMode(props.editmode)}
            {/*<rect x='0' y='0' width='1280' height='720' fill='none' stroke='#AAAAAA' strokeWidth='5px' />*/}
            {props.seats.map((seat) => {
                return ((select.level == seat.level) ? <CamSeat seat={seat} key={seat.id} /> : <div key={seat.id}></div>);
                //return (<Seat seat={seat} key={seat.id} />);
            })}
        </svg>
    );
}

export default CamSeatsList
