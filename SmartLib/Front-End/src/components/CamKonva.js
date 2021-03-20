import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Text, Group } from "react-konva";
import './MouseDown.css'
import {SelectedSeatContext} from "../contexts/SelectSeatContext";
import {SeatContext} from "../contexts/SeatContext";
import CamSeat from "./seatmap/CamSeat";

const boxStroke = "#0000FF";
const boxStrokeSelected = "#FF0000";
const boxStrokeWidth = "6px";
const boxStrokeWidthSelected = "9px";

const colorAvailable = "#5cd89f";
const colorReserved = "#4287f5";
const colorOccupied = "#f4a261";
const colorHogged = "#fc5353";
const colorUnavailable = "#AAAAAA";
const colorError = "#FF0000";

function DrawAnnotations() {
    const [annotations, setAnnotations] = useState([]);
    const [newAnnotation, setNewAnnotation] = useState([]);
    const [selected, setSelected] = useContext(SelectedSeatContext);
    const [seats, setSeats] = useContext(SeatContext);

    // let sel=selected.level;

    function renderColor(status, unavailable) {
        if(unavailable==true)
        {
            return colorUnavailable;
        }

        switch (status) {
            case "Available":
                return colorAvailable;
            case "Reserved":
                return colorReserved;
            case "Occupied":
                return colorOccupied;
            case "Hogged":
                return colorHogged;
            default:
                return colorError;
        }
    }

    useEffect(()=>{
        console.log('selected:',selected)
        // sel=selected.level;
    },[selected])

    useEffect(()=>{

        console.log('selected:',selected)
    },[annotations])

    const handleMouseDown = (event) => {
        if (newAnnotation.length === 0) {
            const { x, y } = event.target.getStage().getPointerPosition();
            setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
        }
    };

    const handleMouseUp = (event) => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            const annotationToAdd = {
                x: sx,
                y: sy,
                width: x - sx,
                height: y - sy,
                key: annotations.length + 1
            };
            console.log(annotationToAdd);
            let tempX1 = Math.floor(annotationToAdd.x*3);
            let tempY1 = Math.floor(annotationToAdd.y*3);
            let tempX2 = Math.floor(annotationToAdd.x+annotationToAdd.width)*3
            let tempY2 = Math.floor(annotationToAdd.y+annotationToAdd.height)*3
            if(tempX1>tempX2) [tempX1, tempX2] = [tempX2, tempX1];
            if(tempY1>tempY2) [tempY1, tempY2] = [tempY2, tempY1];
            setSelected((prevState)=>({
                ...prevState,
                drawX1: tempX1,
                drawY1: tempY1,
                drawX2: tempX2,
                drawY2: tempY2
            }));
            annotations.splice(0,1,annotationToAdd);
            setNewAnnotation([]);
            setAnnotations(annotations);
        }
    };

    const handleMouseMove = (event) => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            setNewAnnotation([
                {
                    x: sx,
                    y: sy,
                    width: x - sx,
                    height: y - sy,
                    key: "0"
                }
            ]);
        }
    };

    // function clickSeat() {
    //     console.log("Clicked " + seat.seatName);
    //     //   alert("Clicked " + props.seat.seatName);
    //     setSelected({ seat: seat.id, level:selected.level });
    // }

    const annotationsToDraw = [...annotations, ...newAnnotation];
    const seatsToDraw=[...seats];

    return (
        <Stage
            className={'stage'}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            width={1980/3}
            height={1080/3}
            scaleX={1}
            scaleY={1}
            // width={'80vw'}
            // height={'60vw'}

        >
            <Layer>
                {annotationsToDraw.map((value) => {
                    return (
                        <Rect
                            x={value.x}
                            y={value.y}
                            width={value.width}
                            height={value.height}
                            fill="transparent"
                            stroke="red"
                        />
                    );
                })}
            </Layer>
            <Layer>
                {
                    seatsToDraw.map((seat) => {
                    return ((selected.level == seat.level) ?
                        //<CamSeatKonva seat={seat} />
                        <Group>
                            <Rect
                                x={seat.x1Img/3}
                                y={seat.y1Img/3}
                                height={(seat.y2Img-seat.y1Img)/3}
                                width={(seat.x2Img-seat.x1Img)/3}
                                fill={"transparent"}
                                stroke={(selected.seat==seat.id)? boxStrokeSelected:renderColor(seat.status, seat.unavailable)}
                                strokeWidth={(selected.seat==seat.id)? boxStrokeWidthSelected:boxStrokeWidth}
                            />
                            <Text
                                className="seatText"
                                //textAnchor="start"
                                x={seat.x1Img/3}
                                y={seat.y1Img/3}
                                //fontSize={30}
                                text={seat.seatName}
                            />
                        </Group>
                        :
                        <Group></Group>);
                })}
            </Layer>
        </Stage>
    );
};

export default DrawAnnotations;
