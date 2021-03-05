import React, { Component } from 'react'
import Seat from './Seat'

export class SeatsList extends Component {
    render() {
        return (
            // <ul>
            //     {this.props.seats.map((seat) => {
            //         return <Seat seat={seat} />
            //     })}
            // </ul>
            <svg width='60vw' height='800' viewBox='0 0 800 800'>
                <rect x='0' y='0' width='800' height='800' fill='none' stroke='#AAAAAA' strokeWidth='0px' />
                {this.props.seats.map((seat) => {
                    return <Seat seat={seat} key={seat.id} />
                })}
            </svg>
        )
    }
}

export default SeatsList
