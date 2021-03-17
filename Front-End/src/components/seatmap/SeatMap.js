import React, { useContext } from "react";
import SeatsList from "./SeatsList";
// import seats from './SeatData'
import { SeatContext } from "../../contexts/SeatContext";

function SeatMap() {
const [seats, setSeats] = useContext(SeatContext);
  return (
    <div>
      {/* <h1>Seats List</h1> */}
      <SeatsList seats={seats} editmode={false}/>
    </div>
  );
}
export default SeatMap;
