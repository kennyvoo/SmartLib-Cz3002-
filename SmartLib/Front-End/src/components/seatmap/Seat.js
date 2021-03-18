import React, { useContext } from "react";
// import { SeatContext } from '../../contexts/SeatContext';
import { SelectedSeatContext } from "../../contexts/SelectSeatContext";

const boxRx = 10;
const boxRy = 10;
const boxHeight = 70;
const boxWidth = 70;
const boxStroke = "#909090";
const boxStrokeSelected = "#000000";
const boxStrokeWidth = "2px";
const boxStrokeWidthSelected = "5px";

const colorAvailable = "#5cd89f";
const colorReserved = "#4287f5";
const colorOccupied = "#f4a261";
const colorHogged = "#fc5353";
const colorUnavailable = "#AAAAAA";
const colorError = "#FF0000";

function Seat(props) {
  
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
        x={props.seat.xLoc}
        y={props.seat.yLoc}
        height={boxHeight}
        width={boxWidth}
        rx={boxRx}
        ry={boxRy}
        fill={renderColor(props.seat.status, props.seat.unavailable)}
        stroke={(selected.seat==props.seat.id)? boxStrokeSelected:boxStroke}
        strokeWidth={(selected.seat==props.seat.id)? boxStrokeWidthSelected:boxStrokeWidth}
      />
      <text
        className="seatText"
        textAnchor="middle"
        fontSize={20}
        x={parseFloat(props.seat.xLoc) + boxWidth / 2}
        y={parseFloat(props.seat.yLoc) + boxHeight / 2}
        //x='10' y='10'
      >
        {props.seat.seatName}
      </text>
    </g>
  );
}

export default Seat;
