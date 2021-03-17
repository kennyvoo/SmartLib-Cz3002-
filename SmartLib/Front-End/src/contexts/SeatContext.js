import React, {useState, createContext} from 'react'

export const SeatContext = createContext();

export const SeatProvider = props => {
    const [seats, setSeats] = useState(
        [
            //Level 2
            {
                id: 1,
                level: 2,
                seatName: 'L2S1',
                xLoc: 25,
                yLoc: 50,
                status: 'Available'
            },
            {
                id: 2,
                level: 2,
                seatName: 'L2S2',
                xLoc: 105,
                yLoc: 150,
                status: 'Reserved'
            },
            {
                id: 3,
                level: 2,
                seatName: 'L2S3',
                xLoc: 500,
                yLoc: 650,
                status: 'Occupied'
            },
            {
                id: 4,
                level: 2,
                seatName: 'L2S4',
                xLoc: 100,
                yLoc: 450,
                status: 'Hogged'
            },
            {
                id: 5,
                level: 2,
                seatName: 'L2S5',
                xLoc: 500,
                yLoc: 160,
                status: 'Available'
            },
            {
                id: 6,
                level: 2,
                seatName: 'L2S6',
                xLoc: 600,
                yLoc: 150,
                status: 'Available'
            },
            {
                id: 7,
                level: 2,
                seatName: 'L2S7',
                xLoc: 300,
                yLoc: 300,
                status: 'Available'
            },
            {
                id: 8,
                level: 2,
                seatName: 'L2S8',
                xLoc: 400,
                yLoc: 650,
                status: 'Reserved'
            },
            {
                id: 9,
                level: 2,
                seatName: 'L2S9',
                xLoc: 200,
                yLoc: 650,
                status: 'Reserved'
            },
            {
                id: 10,
                level: 2,
                seatName: 'L2S10',
                xLoc: 700,
                yLoc: 650,
                status: 'Reserved'
            },
            //Level 3
            {
                id: 11,
                level: 3,
                seatName: 'L3S11',
                xLoc: 700,
                yLoc: 350,
                status: 'Available'
            },
            {
                id: 12,
                level: 3,
                seatName: 'L3S12',
                xLoc: 470,
                yLoc: 470,
                status: 'Occupied'
            },
            {
                id: 13,
                level: 3,
                seatName: 'L3S13',
                xLoc: 190,
                yLoc: 470,
                status: 'Occupied'
            },
            {
                id: 14,
                level: 3,
                seatName: 'L3S14',
                xLoc: 670,
                yLoc: 270,
                status: 'Occupied'
            },
            {
                id: 15,
                level: 3,
                seatName: 'L3S15',
                xLoc: 730,
                yLoc: 160,
                status: 'Occupied'
            },
            //Level 4
            {
                id: 16,
                level: 4,
                seatName: 'L4S16',
                xLoc: 623,
                yLoc: 634,
                status: 'Unavailable'
            },
            {
                id: 17,
                level: 4,
                seatName: 'L4S17',
                xLoc: 163,
                yLoc: 673,
                status: 'Available'
            },
            {
                id: 18,
                level: 4,
                seatName: 'L4S18',
                xLoc: 435,
                yLoc: 347,
                status: 'Reserved'
            },
            {
                id: 19,
                level: 4,
                seatName: 'L4S19',
                xLoc: 436,
                yLoc: 231,
                status: 'Reserved'
            },
            {
                id: 20,
                level: 4,
                seatName: 'L4S20',
                xLoc: 643,
                yLoc: 362,
                status: 'Reserved'
            },
                        //Level 4
            {
                id: 21,
                level: 4,
                seatName: 'L4S21',
                xLoc: 623,
                yLoc: 634,
                status: 'Unavailable'
            },
            {
                id: 22,
                level: 4,
                seatName: 'L4S22',
                xLoc: 163,
                yLoc: 673,
                status: 'Available'
            },
            {
                id: 23,
                level: 4,
                seatName: 'L4S23',
                xLoc: 435,
                yLoc: 347,
                status: 'Available'
            },
            {
                id: 24,
                level: 4,
                seatName: 'L4S24',
                xLoc: 436,
                yLoc: 231,
                status: 'Available'
            },
            {
                id: 25,
                level: 4,
                seatName: 'L4S25',
                xLoc: 146,
                yLoc: 362,
                status: 'Reserved'
            },
            //Level 5
            {
                id: 26,
                level: 5,
                seatName: 'L4S26',
                xLoc: 236,
                yLoc: 532,
                status: 'Available'
            },
            {
                id: 27,
                level: 5,
                seatName: 'L4S27',
                xLoc: 462,
                yLoc: 125,
                status: 'Reserved'
            },
            {
                id: 28,
                level: 5,
                seatName: 'L4S28',
                xLoc: 643,
                yLoc: 213,
                status: 'Hogged'
            },
            {
                id: 29,
                level: 5,
                seatName: 'L4S29',
                xLoc: 463,
                yLoc: 416,
                status: 'Hogged'
            },
            {
                id: 30,
                level: 5,
                seatName: 'L4S30',
                xLoc: 213,
                yLoc: 362,
                status: 'Reserved'
            },
        ]);
    
    return (
        <SeatContext.Provider value={[seats, setSeats]}>
            {props.children}
        </SeatContext.Provider>
    )
}