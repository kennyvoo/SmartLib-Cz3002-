import React, {useContext} from "react";
import { Pane, Text, Button, Heading, SegmentedControl, TextInput } from "evergreen-ui";
import { Link } from "react-router-dom";
import L2C1 from "./Img/L2C1.jpg";
import L3C1 from "./Img/L3C1.jpg";
import L4C1 from "./Img/L4C1.jpg";
import L5C1 from "./Img/L5C1.jpg";
import MapSelectorPane from "./MapSelectorPane";
import GridLines from "./seatmap/GridLines";
import ImagePlane from "./seatmap/ImagePlane";
import SeatMap from "./seatmap/SeatMap";
import EditSeatMap from "./seatmap/EditSeatMap";
import Component from "@reactions/component";
import {SelectedSeatContext} from "../contexts/SelectSeatContext";
import {SeatContext} from "../contexts/SeatContext";
import CamSeatMap from "./seatmap/CamSeatMap";
import DrawRect from "./DrawRect";

function ModifySeatsPage(){

    const [seats, setSeats] = useContext(SeatContext);
    const [selected, setSelected] = useContext(SelectedSeatContext);

    let seatsImg=L3C1;

    function modifySeat()
    {
        alert("Modify");
    }

    function deleteSeat()
    {

    }

    function cameraSelect(level)
    {
        switch (level) {
            case 2:
                return L2C1;
            case 3:
                return L3C1;
            case 4:
                return L4C1;
            case 5:
                return L5C1;
        }
    }

    return(
        <Pane
            height='auto'
            width='100vw'
            backgroundColor="white"
            display="flex"
            justifyContent="center"
        >
            <div>
            <Pane
                height="auto"
                width="90vw"
                background="none"
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                padding={15}
            >
                <Heading size={800} marginBottom={10}>
                    Modify / Delete Seats
                </Heading>
            </Pane>

            <Pane
                height="auto"
                width={"95vw"}
                background="none"
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={0}
                border="default"
                borderRadius={5}
            >
                <div>
                {/* Segmented Control Bar*/}
                <Component
                    initialState={{
                        options: [
                            { label: "Level 2", value: 2 },
                            { label: "Level 3", value: 3 },
                            { label: "Level 4", value: 4 },
                            { label: "Level 5", value: 5 },
                        ],
                        value: selected.level,
                    }}
                >
                    {({ state, setState }) => (
                        <SegmentedControl
                            width="95vw"
                            height={50}
                            padding={10}
                            options={state.options}
                            value={state.value}
                            onChange={(value) => { setState({ value }); setSelected({seat:0, level: value });}}
                        />
                    )}
                </Component>

                    <h3>Selected Seat: {(selected.seat == 0) ? 'None' : selected.seat}</h3>
                    <h3>Selected Level: { selected.level }</h3>

                    <Pane
                        height="auto"
                        width="auto"
                        margin={10}
                        background="tint2"
                        border="default"
                        borderRadius={5}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        backgroundImage={`url(${cameraSelect(selected.level)})`}
                        backgroundSize={"contain"}
                        backgroundRepeat={"no-repeat"}
                        backgroundPosition={"center center"}
                        backgroundOrigin={"content-box"}
                    >
                        {/*<svg width="80vw" height="45vw" viewBox="0 0 1280 720">*/}
                        {/*    <GridLines/>*/}
                        {/*    /!*<ImagePlane/>*!/*/}
                        {/*</svg>*/}
                        <CamSeatMap/>

                    </Pane>

                    {/*<Pane>*/}
                    {/*    <DrawRect/>*/}
                    {/*</Pane>*/}

                    <h3>x1Img: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).x1Img}</h3>
                    <h3>x2Img: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).x2Img}</h3>
                    <h3>y1Img: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).y1Img}</h3>
                    <h3>y2Img: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).y1Img}</h3>

                    <Pane
                        height={"auto"}
                        width={"auto"}
                        margin={10}
                        background="tint2"
                        border="default"
                        borderRadius={5}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                    >
                        <EditSeatMap />
                    </Pane>

                    <h3>id: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).id}</h3>
                    <h3>level: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).level }</h3>
                    <h3>seatName: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).seatName }</h3>
                    <h3>xLoc: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).xLoc }</h3>
                    <h3>yLoc: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).yLoc }</h3>
                    <h3>status: { (selected.seat == 0) ? 'None' : (seats.find((theSeat) => theSeat.id == selected.seat)).status }</h3>
                    <h3>unavailable: { (selected.seat == 0) ? 'None' : ((seats.find((theSeat) => theSeat.id == selected.seat)).unavailable)?"True":"False" }</h3>

                    <Pane>
                        <Text>level=</Text>
                        <TextInput
                            name="text-input-name"
                            placeholder="2 - 5"
                        />
                    </Pane>
                    <Pane>
                        <Text>seatName=</Text>
                        <TextInput
                            name="text-input-name"
                            placeholder="string"
                        />
                    </Pane>
                    <Pane>
                        <Text>xLoc=</Text>
                        <TextInput
                            name="text-input-name"
                            placeholder="x"
                        />
                    </Pane>
                    <Pane>
                        <Text>yLoc=</Text>
                        <TextInput
                            name="text-input-name"
                            placeholder="y"
                        />
                    </Pane>
                    <Pane>
                        <Text>unavailable=</Text>
                        <TextInput
                            name="text-input-name"
                            placeholder="true/false"
                        />
                    </Pane>

                    <Button onClick={modifySeat} marginRight={16} appearance="primary">Ok</Button>


                </div>
            </Pane>
            </div>

        </Pane>

    );
}

export default ModifySeatsPage;