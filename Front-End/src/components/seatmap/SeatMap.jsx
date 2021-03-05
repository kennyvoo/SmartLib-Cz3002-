import React from 'react'
import SeatsList from './SeatsList'
import seats from './SeatData'

class SeatMap extends React.Component{
    render() {
        return (
            <div>
                {/* <h1>Seats List</h1> */}
                <SeatsList seats={seats} />
            </div>
        )
    }
}
export default SeatMap;