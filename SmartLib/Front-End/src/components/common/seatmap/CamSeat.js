//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: CamSeat.js                                                                                                //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports rendered SVG element of a single seat. Seat is passed in via props. To be used with CamSeatList.  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from "react";
import { SelectedSeatContext } from "../../../contexts/SelectSeatContext";
import Colors from "../../Configuration/Colors";

const boxRx = 0;
const boxRy = 0;
const boxStrokeSelected = "#FF0000";
const boxStrokeWidth = "6px";
const boxStrokeWidthSelected = "9px";

function CamSeat(props) {
    const [selected, setSelected] = useContext(SelectedSeatContext);

    // Render color according to status
    function renderColor(status, unavailable) {
        if(unavailable==true)
        {
            return Colors.colorUnavailable;
        }

        switch (status) {
            case "Available": return Colors.colorAvailable;
            case "Reserved": return Colors.colorReserved;
            case "Occupied": return Colors.colorOccupied;
            case "Detected": return Colors.colorOccupied;
            case "Hogged": return Colors.colorHogged;
            default: return Colors.colorError;
        }
    }

    // Set SelectedSeatContext to current seat upon click
    function clickSeat() {
        console.log("Clicked " + props.seat.seatName);
        //   alert("Clicked " + props.seat.seatName);
        setSelected({ seat: props.seat.id, level:selected.level });
    }

    return (
        <g onClick={clickSeat} cursor="pointer">
            <rect
                x={props.seat.x1Img}
                y={props.seat.y1Img}
                height={props.seat.y2Img-props.seat.y1Img}
                width={props.seat.x2Img-props.seat.x1Img}
                rx={boxRx}
                ry={boxRy}
                fill={"none"}
                stroke={(selected.seat==props.seat.id)? boxStrokeSelected:renderColor(props.seat.status, props.seat.unavailable)}
                strokeWidth={(selected.seat==props.seat.id)? boxStrokeWidthSelected:boxStrokeWidth}
            />
            <text
                className="seatText"
                textAnchor="start"
                x={props.seat.x1Img}
                y={props.seat.y1Img}
                fontSize={30}
                //x='10' y='10'
            >
                {props.seat.seatName}
            </text>
        </g>
    );
}

export default CamSeat;
