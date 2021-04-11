//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: CamKonva.js                                                                                               //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Click and Drag Bounding Box. Component uses react-konva library.                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useContext, useEffect, useState} from "react";
import { Stage, Layer, Rect, Text, Group } from "react-konva";
import {SelectedSeatContext} from "../../../contexts/SelectSeatContext";
import {SeatContext} from "../../../contexts/SeatContext";
import Colors from "../../Configuration/Colors";

const boxStrokeSelected = "#FF0000";
const boxStrokeWidth = "6px";
const boxStrokeWidthSelected = "9px";

function DrawAnnotations() {
    const [annotations, setAnnotations] = useState([]);
    const [newAnnotation, setNewAnnotation] = useState([]);
    const [selected, setSelected] = useContext(SelectedSeatContext);
    const [seats, setSeats] = useContext(SeatContext);

    function renderColor(status, unavailable) {
        if(unavailable==true)
        {
            return Colors.colorUnavailable;
        }
        switch (status) {
            case "Available": return Colors.colorAvailable;
            case "Reserved": return Colors.colorReserved;
            case "Occupied": return Colors.colorOccupied;
            case "Detected": return Colors.colorOccupied;
            case "Hogged": return Colors.colorHogged;
            default: return Colors.colorError;
        }
    }

    // useEffect upon [selected] trigger.
    // useEffect(()=>{
    //     console.log('selected:',selected)
    //     // sel=selected.level;
    // },[selected])

    // useEffect upon [annotations] trigger.
    // useEffect(()=>{
    //     console.log('selected:',selected)
    // },[annotations])

    // Set new annotation upon mouse down event
    const handleMouseDown = (event) => {
        if (newAnnotation.length === 0) {
            const { x, y } = event.target.getStage().getPointerPosition();
            setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
        }
    };

    // Set add annotation to drawing list upon mouse up event
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
