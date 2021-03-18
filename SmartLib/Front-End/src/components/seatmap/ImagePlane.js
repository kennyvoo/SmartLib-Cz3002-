import React, { useState } from "react";

function ImagePlane() {

    const [planeCoords, setplaneCoords]=useState(
        [
            {
                x:100,
                y:300
            },
            {
                x:600,
                y:300
            },
            {
                x:1100,
                y:450
            },
            {
                x:80,
                y:550
            },
            ])

    return (
        <g>
            <circle r={12} cx={planeCoords[0].x} cy={planeCoords[0].y} stroke={"#0000FF"} strokeWidth={5} fill={"#FF0000"}/>
            <circle r={12} cx={planeCoords[1].x} cy={planeCoords[1].y} stroke={"#0000FF"} strokeWidth={5} fill={"#FF0000"}/>
            <circle r={12} cx={planeCoords[2].x} cy={planeCoords[2].y} stroke={"#0000FF"} strokeWidth={5} fill={"#FF0000"}/>
            <circle r={12} cx={planeCoords[3].x} cy={planeCoords[3].y} stroke={"#0000FF"} strokeWidth={5} fill={"#FF0000"}/>
        </g>
    );
}

export default ImagePlane;