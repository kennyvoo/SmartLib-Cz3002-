import React, {useState, createContext} from 'react'

export const LocalVarContext = createContext();

export const LocalVarProvider = props => {
    const [localVar, setLocalVar] = useState();
    // console.log(selected);

    
    return (
        <LocalVarContext.Provider value={[localVar, setLocalVar]}>
            {props.children}
        </LocalVarContext.Provider>
    )
}