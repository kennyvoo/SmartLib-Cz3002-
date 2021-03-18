import React, {useState, createContext} from 'react'

export const SelectedSeatContext = createContext();

export const SelectedSeatProvider = props => {
    const [selected, setSelected] = useState({seat:0, level:2});
    // console.log(selected);
    return (
        <SelectedSeatContext.Provider value={[selected, setSelected]}>
            {props.children}
        </SelectedSeatContext.Provider>
    )
}