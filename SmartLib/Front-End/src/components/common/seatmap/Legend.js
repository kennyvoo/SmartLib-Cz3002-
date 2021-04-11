//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: Legend.js                                                                                                 //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports rendered SVG element containing legend for seat map.                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import Colors from "../../Configuration/Colors";

function Legend(){

    return(
        <svg viewBox={'0 0 800 50'}>
            <LegendElement x={0} y={0} color={Colors.colorAvailable} label={'Available'}/>
            <LegendElement x={150} y={0} color={Colors.colorReserved} label={'Reserved'}/>
            <LegendElement x={300} y={0} color={Colors.colorOccupied} label={'Occupied'}/>
            <LegendElement x={450} y={0} color={Colors.colorHogged} label={'Hogged'}/>
            <LegendElement x={600} y={0} color={Colors.colorUnavailable} label={'Unavailable'}/>
        </svg>
    );
}

// Returns a single legend element for a status type passed in as props.
function LegendElement(props){
    const boxHeight= 50;
    const boxWidth= 50;
    const boxRx= 5;
    const boxRy= 5;

    return(
        <g>
            <rect
                x={props.x}
                y={props.y}
                height={boxHeight}
                width={boxWidth}
                rx={boxRx}
                ry={boxRy}
                fill={props.color}
            />
            <text
                textAnchor={'start'}
                fontSize={20}
                x={props.x+boxWidth+7}
                y={props.y+(boxHeight/2)+7}
            >
                {props.label}
            </text>
        </g>
    );
}

export default Legend;