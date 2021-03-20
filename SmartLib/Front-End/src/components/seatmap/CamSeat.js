import React, { useContext } from "react";
// import { SeatContext } from '../../contexts/SeatContext';
import { SelectedSeatContext } from "../../contexts/SelectSeatContext";

const boxRx = 0;
const boxRy = 0;
const boxStroke = "#0000FF";
const boxStrokeSelected = "#FF0000";
const boxStrokeWidth = "6px";
const boxStrokeWidthSelected = "9px";

const colorAvailable = "#5cd89f";
const colorReserved = "#4287f5";
const colorOccupied = "#f4a261";
const colorHogged = "#fc5353";
const colorUnavailable = "#AAAAAA";
const colorError = "#FF0000";

function CamSeat(props) {

    //const [seats, setSeats] = useContext(SeatContext);
    const [selected, setSelected] = useContext(SelectedSeatContext);

    function renderColor(status, unavailable) {
        if(unavailable==true)
        {
            return colorUnavailable;
        }

        switch (status) {
            case "Available":
                return colorAvailable;
            case "Reserved":
                return colorReserved;
            case "Occupied":
                return colorOccupied;
            case "Hogged":
                return colorHogged;
            default:
                return colorError;
        }
    }

    function clickSeat() {
        console.log("Clicked " + props.seat.seatName);
        //   alert("Clicked " + props.seat.seatName);
        setSelected({ seat: props.seat.id, level:selected.level });
    }
    return (
        // <li>
        //     {this.props.seat.xLoc} {this.props.seat.yLoc}
        // </li>
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
