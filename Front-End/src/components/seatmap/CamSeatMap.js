import React, { useContext } from "react";
import CamSeatsList from "./CamSeatsList";
// import seats from './SeatData'
import { SeatContext } from "../../contexts/SeatContext";

function CamSeatMap() {
const [seats, setSeats] = useContext(SeatContext);
  return (
    <div>
      {/* <h1>Seats List</h1> */}
      <CamSeatsList seats={seats} editmode={true}/>
    </div>
  );
}
export default CamSeatMap;
