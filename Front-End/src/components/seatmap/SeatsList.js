import React, { useContext } from 'react'
import Seat from "./Seat";
import { SelectedSeatContext, SelectSeatContext } from '../../contexts/SelectSeatContext';
import GridLines from "./GridLines";

export function SeatsList(props) {
    
    const [select, setSelect] = useContext(SelectedSeatContext);

    function editMode(mode)
    {
        if(mode) return <GridLines/>
    }
    return (
        <svg width='100%' height='100%' viewBox='0 0 800 800'>
            {editMode(props.editmode)}
            <rect x='0' y='0' width='800' height='800' fill='none' stroke='#AAAAAA' strokeWidth='2px' />
            {props.seats.map((seat) => {
                return ((select.level == seat.level) ? <Seat seat={seat} key={seat.id} /> : <div key={seat.id}></div>);
                //return (<Seat seat={seat} key={seat.id} />);
            })}
        </svg>
    );
}

export default SeatsList
