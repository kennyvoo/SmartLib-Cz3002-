//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: Stats.js                                                                                                  //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Stats Pane. The seat information is passed in via props.                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react'
import Chart from 'react-google-charts'
import {
    Pane, SegmentedControl
} from "evergreen-ui";
import './Stats.css';
import Component from "@reactions/component";
import Colors from "../Configuration/Colors";

export default function Stats(props){

    const [statsSel, setStatsSel]=useState({val: 0});

    // Function to convert list of seats to individual number of seats of each status.
    // Takes in an array of object [seats]
    // Returns an object [stats]
    function countStats(seats) {
        let stats = {total: 0, avail: 0,occupied: 0, reserved: 0, hogged: 0, unavail: 0,};
        let i;
        stats.total=seats.length;
        for (i = 0; i < seats.length; i++){
            if(seats[i].unavailable==true) stats.unavail++;
            else
            {
                if (seats[i].status == 'Available') stats.avail++;
                else if (seats[i].status == 'Occupied' || seats[i].status == 'Detected') stats.occupied++;
                else if (seats[i].status == 'Reserved') stats.reserved++;
                else if (seats[i].status == 'Hogged') stats.hogged++;
            }

        }
        return (stats);
    }

    // Function to filter seats based on selected level
    // Takes all seats [props.seats] and selected level [statsSel.val] as input
    // Returns filtered seats as [levelSeats]
    const levelSeats = (statsSel.val==0 ? props.seats : props.seats.filter(seat => seat.level === statsSel.val.toString()));
    //console.log(levelSeats);

    let stats = countStats(levelSeats);

    return(
      <div>
          {/* Segmented Control Bar*/}
          <Pane className={'segmentedControlPane'}>
              <Component
                  initialState={{
                      options: [
                          { label: "Overall", value: 0 },
                          { label: "Level 2", value: 2 },
                          { label: "Level 3", value: 3 },
                          { label: "Level 4", value: 4 },
                          { label: "Level 5", value: 5 },
                      ],
                      value: 0,
                  }}
              >
                  {({ state, setState }) => (
                      <SegmentedControl
                          className={'segmentedControl'}
                          options={state.options}
                          value={state.value}
                          onChange={(value) => { setState({ value }); setStatsSel({val: value})}}
                      />
                  )}
              </Component>
          </Pane>

          <p className={'seatAvailText'} >Seat Availability: <b>{(stats.avail/stats.total*100).toFixed(2)}%</b></p>
          <Pane className={'statsChartPane'}>
              <Chart
                  className={'statsChart'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                      ['Status', 'No. of Seats'],
                      ['Available', stats.avail],
                      ['Reserved', stats.reserved],
                      ['Occupied', stats.occupied],
                      ['Hogged', stats.hogged],
                      ['Unavailable', stats.unavail]
                  ]}
                  options={{
                      pieStartAngle: -90,
                      slices: {
                          0: { color: Colors.colorAvailable },
                          1: { color: Colors.colorReserved },
                          2: { color: Colors.colorOccupied },
                          3: { color: Colors.colorHogged },
                          4: { color: Colors.colorUnavailable },
                      },
                  }}
                  rootProps={{ 'data-testid': '1' }}
              />
          </Pane>
          <Pane className={'statsTablePane'} border={'default'}>
              <table>
                  <tbody>
                      <tr>
                          <th>Status</th>
                          <th>No. of Seats</th>
                      </tr>
                      <tr>
                          <td>Available</td>
                          <td>{stats.avail}</td>
                      </tr>
                      <tr>
                          <td>Reserved</td>
                          <td>{stats.reserved}</td>
                      </tr>
                      <tr>
                          <td>Occupied</td>
                          <td>{stats.occupied}</td>
                      </tr>
                      <tr>
                          <td>Hogged</td>
                          <td>{stats.hogged}</td>
                      </tr>
                      <tr>
                          <td>Unavailable</td>
                          <td>{stats.unavail}</td>
                      </tr>
                      <tr className={'total'}>
                          <td>Total Seats</td>
                          <td>{stats.total}</td>
                      </tr>
                  </tbody>
              </table>
          </Pane>
      </div>
    );
}