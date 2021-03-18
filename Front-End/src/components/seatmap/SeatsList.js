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
        <svg viewBox='0 0 800 800'>
            {editMode(props.editmode)}
            <rect className={'mapBorder'} x={1} y={1} rx={15} ry={15} width={800-2} height={800-2} fill='none' stroke='#CCCCCC' strokeWidth='2px' />
            {props.seats.map((seat) => {
                return ((select.level == seat.level) ? <Seat seat={seat} key={seat.id} /> : <div key={seat.id}></div>);
                //return (<Seat seat={seat} key={seat.id} />);
            })}
        </svg>
    );
}

export default SeatsList
