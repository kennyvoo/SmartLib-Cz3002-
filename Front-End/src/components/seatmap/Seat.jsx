import React, { Component } from 'react'

var boxRx = 10;
var boxRy = 10;
var boxHeight = 70;
var boxWidth = 70;
var boxStroke = "#909090";
var boxStrokeWidth = "2px";

class Seat extends Component {

    constructor(props)
    {
        super(props);
        this.clickSeat = this.clickSeat.bind(this);
    }

    renderColor(param) {
        switch(param) {
            case 'Available':
                return '#2ac73f';
            case 'Reserved':
                return '#eb8934'; 
            case 'Occupied':
                return '#eb3434';
            case 'Hogged':
                return '#9e9e9e';
            default:
                return 'none';
        }
    }
    
    clickSeat()
    {
        console.log("Clicked " + this.props.seat.seatName);
        alert("Clicked " + this.props.seat.seatName);
    }
    
    render() {
        return (
            // <li>
            //     {this.props.seat.xLoc} {this.props.seat.yLoc}
            // </li>
            <g onClick={this.clickSeat} cursor='pointer'>
                <rect
                    x={this.props.seat.xLoc} y={this.props.seat.yLoc}
                    height={boxHeight} width={boxWidth}
                    rx={boxRx} ry={boxRy}
                    fill={this.renderColor(this.props.seat.status)}
                    stroke={boxStroke} strokeWidth={boxStrokeWidth}
                />
                <text
                    className="seatText"
                    textAnchor="middle"
                    x={this.props.seat.xLoc+(boxWidth/2)}
                    y={this.props.seat.yLoc+(boxHeight/2)}
                    //x='10' y='10'
                >
                    {this.props.seat.seatName}
                </text>
            </g>
        )
    }
}

export default Seat
