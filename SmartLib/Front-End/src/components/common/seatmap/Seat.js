//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: Seat.js                                                                                                   //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports rendered SVG element of a single seat. Seat is passed in via props. To be used with SeatList.     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from "react";
import { SelectedSeatContext } from "../../../contexts/SelectSeatContext";
import Colors from "../../Configuration/Colors";

const boxRx = 10;
const boxRy = 10;
const boxHeight = 70;
const boxWidth = 70;
const boxStroke = "#909090";
const boxStrokeSelected = "#000000";
const boxStrokeWidth = "2px";
const boxStrokeWidthSelected = "5px";

function Seat(props) {

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
  function clickSeat()
  {
      console.log("Clicked " + props.seat.seatName);
      setSelected({seat: props.seat.id, level: selected.level, seatname: props.seat.seatName});
  }

  return (
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
      >
        {props.seat.seatName}
      </text>
    </g>
  );
}

export default Seat;
