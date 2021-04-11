//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: GridLines.js                                                                                              //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports rendered group of SVG element containing horizontal and vertical gridlines.                       //
//            Displayed when edit mode is true.                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import './GridLines.css'

function GridLines() {

        const maxWidth= 1920;
        const maxHeight=1080;

    return(
        <g>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={0} y2={0}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={100} y2={100}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={200} y2={200}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={300} y2={300}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={400} y2={400}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={500} y2={500}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={600} y2={600}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={700} y2={700}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={800} y2={800}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={900} y2={900}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={1000} y2={1000}/>
                <line className={"HorizontalLine"} x1={0} x2={maxWidth} y1={1100} y2={1100}/>


                <line className={"VerticalLine"} x1={0} x2={0} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={100} x2={100} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={200} x2={200} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={300} x2={300} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={400} x2={400} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={500} x2={500} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={600} x2={600} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={700} x2={700} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={800} x2={800} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={900} x2={900} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={1000} x2={1000} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={1100} x2={1100} y1={0} y2={maxHeight}/>
                <line className={"VerticalLine"} x1={1200} x2={1200} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={1300} x2={1300} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={1400} x2={1400} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={1500} x2={1500} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={1600} x2={1600} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={1700} x2={1700} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={1800} x2={1800} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={1900} x2={1900} y1={0} y2={maxHeight}/>
            <line className={"VerticalLine"} x1={2000} x2={2000} y1={0} y2={maxHeight}/>

                <text className="OriginText" textAnchor="start" x={0} y={25}>0</text>

                <text className="HorizontalText" textAnchor="start" x={0} y={100}>100</text>
                <text className="HorizontalText" textAnchor="start" x={0} y={200}>200</text>
                <text className="HorizontalText" textAnchor="start" x={0} y={300}>300</text>
                <text className="HorizontalText" textAnchor="start" x={0} y={400}>400</text>
                <text className="HorizontalText" textAnchor="start" x={0} y={500}>500</text>
                <text className="HorizontalText" textAnchor="start" x={0} y={600}>600</text>
                <text className="HorizontalText" textAnchor="start" x={0} y={700}>700</text>
                <text className="HorizontalText" textAnchor="start" x={0} y={800}>800</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={900}>900</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={1000}>1000</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={1100}>1100</text>

                <text className="VerticalText" textAnchor="end" x={100} y={25}>100</text>
                <text className="VerticalText" textAnchor="end" x={200} y={25}>200</text>
                <text className="VerticalText" textAnchor="end" x={300} y={25}>300</text>
                <text className="VerticalText" textAnchor="end" x={400} y={25}>400</text>
                <text className="VerticalText" textAnchor="end" x={500} y={25}>500</text>
                <text className="VerticalText" textAnchor="end" x={600} y={25}>600</text>
                <text className="VerticalText" textAnchor="end" x={700} y={25}>700</text>
                <text className="VerticalText" textAnchor="end" x={800} y={25}>800</text>
                <text className="VerticalText" textAnchor="end" x={900} y={25}>900</text>
                <text className="VerticalText" textAnchor="end" x={1000} y={25}>1000</text>
                <text className="VerticalText" textAnchor="end" x={1100} y={25}>1100</text>
                <text className="VerticalText" textAnchor="end" x={1200} y={25}>1200</text>
            <text className="VerticalText" textAnchor="end" x={1300} y={25}>1300</text>
            <text className="VerticalText" textAnchor="end" x={1400} y={25}>1400</text>
            <text className="VerticalText" textAnchor="end" x={1500} y={25}>1500</text>
            <text className="VerticalText" textAnchor="end" x={1600} y={25}>1600</text>
            <text className="VerticalText" textAnchor="end" x={1700} y={25}>1700</text>
            <text className="VerticalText" textAnchor="end" x={1800} y={25}>1800</text>
            <text className="VerticalText" textAnchor="end" x={1900} y={25}>1900</text>
            <text className="VerticalText" textAnchor="end" x={2000} y={25}>2000</text>

        </g>
    );
}

export default GridLines;