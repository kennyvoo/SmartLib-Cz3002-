import React from 'react'
import {Alert} from "evergreen-ui";


export default function AlertList(props){
    return(
      <div>
          {/*<h2>Alerts</h2>*/}
          {/*{props.seats.map((seat) => {*/}
          {/*    return ((seat.status=='Hogged') ? <AlertComponents seat={seat} key={seat.id} /> : <div key={seat.id}></div>);*/}
          {/*    //return (<Seat seat={seat} key={seat.id} />);*/}
          {/*})}*/}
          {
              (props.seats.filter((seat) => seat.status==='Hogged')).map((seat) => {
                  return (<AlertComponents seat={seat} key={seat.id} />);
              })
          }
      </div>
    );
}

function AlertComponents(props){

    function titleGen(seatName){
        return("Seat "+ seatName +" is Hogged");
    }
    return(
        // <li>{props.seat.seatName} is Hogged</li>
        <Alert
            intent="warning"
            // appearance={'card'}
            title={titleGen(props.seat.seatName)}
            marginBottom={25}
        />
    );
}