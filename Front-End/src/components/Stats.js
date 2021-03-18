import React, {useState} from 'react'
import Chart from 'react-google-charts'
import {
    Pane,
} from "evergreen-ui";

export default function Stats(props){

    // const [title, setTitle]=useState('');
    // console.log(props.statsSel.val)
    //
    // switch (props.statsSel.val)
    // {
    //     case 0: setTitle('Overall');
    //     case 2: setTitle('Level 2');
    //     case 3: setTitle('Level 3');
    //     case 4: setTitle('Level 4');
    //     case 5: setTitle('Level 5');
    // }

    function countStats(seats) {
        var stats = {total: 0, avail: 0,occupied: 0, reserved: 0, hogged: 0, unavail: 0,};
        var i;
        let currSeats= seats.f
        stats.total=seats.length;
        for (i = 0; i < seats.length; i++){
            if(seats[i].unavailable==true) stats.unavail++;
            else
            {
                if (seats[i].status == 'Available') stats.avail++;
                else if (seats[i].status == 'Occupied') stats.occupied++;
                else if (seats[i].status == 'Reserved') stats.reserved++;
                else if (seats[i].status == 'Hogged') stats.hogged++;
            }

        }
        return (stats);
    }

    const levelSeats = (props.statsSel.val==0 ? props.seats : props.seats.filter(seat => seat.level === props.statsSel.val));
    // console.log(props.statsSel);
    // console.log(props.seats);
    console.log(levelSeats);
    let stats = countStats(levelSeats);

    return(
      <div>
          <Pane width={600}>
              <Chart
                  className={'statsChart'}
                  width={600}
                  height={500}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                      ['Status', 'No. of Seats'],
                      ['Available', stats.avail],
                      ['Reserved', stats.reserved],
                      ['Occupied', stats.occupied],
                      ['Hogged', stats.hogged],
                      ['Unavailable', stats.unavail],
                  ]}
                  rootProps={{ 'data-testid': '1' }}
              />
          </Pane>
          <h3>Total: {levelSeats.length}</h3>
          <h3>Available: {stats.avail}</h3>
          <h3>Reserved: {stats.reserved}</h3>
          <h3>Occupied: {stats.occupied}</h3>
          <h3>Hogged: {stats.hogged}</h3>
          <h3>Unavailable: {stats.unavail}</h3>
          <h3>Added up check: {stats.avail+stats.reserved+stats.occupied+stats.hogged+stats.unavail}</h3>

      </div>
    );
}