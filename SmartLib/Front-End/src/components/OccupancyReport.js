import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import './OccupancyReportPage.css'
import Colors from "./Colors";
import {
    Pane,
    Button,
    DownloadIcon
} from "evergreen-ui";


function OccupancyReport() {

    const [seatLog, setSeatLog] = useState()
    const [lvl2, setLvl2] = useState()
    const [lvl3, setLvl3] = useState()
    const [lvl4, setLvl4] = useState()
    const [lvl5, setLvl5] = useState()

    useEffect(() => {

        // Update the document title using the browser API
        axios({
            method: "GET",
            url: "http://localhost:4000/api/reportData"
        }).then((response) => {
            setSeatLog(parseData(response.data.seatLog))
            setLvl2(parseData(response.data.levelLog.level2))
            setLvl3(parseData(response.data.levelLog.level3))
            setLvl4(parseData(response.data.levelLog.level4))
            setLvl5(parseData(response.data.levelLog.level5))

        })
    }, []);

    function parseData(res) {
        //let data = [['Time', 'Available', 'Occupied', 'Hogged', 'Reserved', 'Unavailable']]
        let data = [
            [
                { type: 'datetime', label: 'Timestamp' },
                'Available',
                'Occupied',
                'Hogged',
                'Reserved',
                'Unavailable'
            ]
        ]
        res.map((seat) => {
            data.push([new Date(seat.timestamp), seat.value.Available, seat.value.Occupied, seat.value.Hogged, seat.value.Reserved, seat.value.Unavailable])
        })
        return data
    }

    return (
        <div >
            <Pane className={'chartPane'} border={'default'}>
            <LineChart data={seatLog} title={'Total'}/>
            </Pane>
            <Pane className={'chartPane'} border={'default'}>
            <LineChart data={lvl2} title={'Level 2'}/>
            </Pane>
            <Pane className={'chartPane'} border={'default'}>
            <LineChart data={lvl3} title={'Level 3'}/>
            </Pane>
            <Pane className={'chartPane'} border={'default'}>
            <LineChart data={lvl4} title={'Level 4'}/>
            </Pane>
            <Pane className={'chartPane'} border={'default'}>
            <LineChart data={lvl5} title={'Level 5'}/>
            </Pane>
            {/*<ChartElement data={lvl2} title={'Level 2'}/>*/}
        </div>
    )
}

function ChartElement(props){
    return(
        <Chart
            className={'reportChart'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={props.data}
            options={{
                title: props.title,
                chartArea: { width: '50%' },
                legend: 'none'
            }}
        />
    );
}

function LineChart(props){
    return(
        <Chart
            className={'reportChart'}
            chartType="Line"
            loader={<div>Loading Chart</div>}
            data={props.data}
            options={{
                chart: {
                    title: props.title,
                },
                vAxis: {viewWindow: {min:0, max:100}},
                width: "100%",
                height: 400,
                series: {
                    // Gives each series an axis name that matches the Y-axis below.
                    0: { axis: 'Occupancy' },
                },
                axes: {
                    // Adds labels to each axis; they don't have to match the axis names.
                    y: {
                        Occupancy: { label: 'Occupancy (%)' },
                    },
                },
            }}
        />
    );
}

export default OccupancyReport;