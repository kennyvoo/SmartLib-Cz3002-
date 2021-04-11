//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: SelectSeatContext.js                                                                                      //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports Select Seat Context component with the use of ContextAPI. Used for passing seat selection as      //
//            universal data across the entire webpage.                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useState, createContext} from 'react'

export const SelectedSeatContext = createContext();

export const SelectedSeatProvider = props => {
    const [selected, setSelected] = useState({seat:'0', level:'2', timestamp:'', bookingID:'', drawX1: 0, drawY1: 0, drawX2: 0, drawY2: 0});
    // console.log(selected);
    
    return (
        <SelectedSeatContext.Provider value={[selected, setSelected]}>
            {props.children}
        </SelectedSeatContext.Provider>
    )
}