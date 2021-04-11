//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: SeatContext.js                                                                                            //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports Seat Context component with the use of ContextAPI. Used for passing list of seats as universal    //
//            data across the entire webpage.                                                                           //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useState, createContext} from 'react'

export const SeatContext = createContext();

export const SeatProvider = props => {
    const [seats, setSeats] = useState([]);
    
    return (
        <SeatContext.Provider value={[seats, setSeats]}>
            {props.children}
        </SeatContext.Provider>
    )
}