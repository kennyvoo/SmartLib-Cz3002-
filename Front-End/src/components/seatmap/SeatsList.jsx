import React, { useContext } from 'react'
import Seat from './Seat'
import { SelectedSeatContext, SelectSeatContext } from '../../contexts/SelectSeatContext';

export function SeatsList(props) {
    
    const [select, setSelect] = useContext(SelectedSeatContext);

    return (
        <svg width='60vw' height='800' viewBox='0 0 800 800'>
            <rect x='0' y='0' width='800' height='800' fill='none' stroke='#AAAAAA' strokeWidth='0px' />
            {props.seats.map((seat) => {
                return ((select.level == seat.level) ? <Seat seat={seat} key={seat.id} /> : <div key={seat.id}></div>);
                //return (<Seat seat={seat} key={seat.id} />);
            })}
        </svg>
    );
}

export default SeatsList
