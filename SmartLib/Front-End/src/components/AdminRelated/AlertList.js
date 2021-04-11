//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: AlertList.js                                                                                              //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Admin Alert Pane. The seat data is passed in as props.                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import {Alert} from "evergreen-ui";


export default function AlertList(props){
    return(
      <div>
          {
              (props.seats.filter((seat) => (seat.status==='Hogged' && seat.unavailable===false))).map((seat) => {
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
        <Alert
            intent="warning"
            // appearance={'card'}
            title={titleGen(props.seat.seatName)}
            marginBottom={25}
        />
    );
}