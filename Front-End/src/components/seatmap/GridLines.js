import React, { useContext } from "react";

function GridLines() {


    return(
        <g>
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={0} y2={0} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={100} y2={100} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={200} y2={200} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={300} y2={300} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={400} y2={400} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={500} y2={500} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={600} y2={600} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={700} y2={700} stroke={"#FF0000"} strokeWidth={2} />
            <line className={"HorizontalLine"} x1={0} x2={1280} y1={800} y2={800} stroke={"#FF0000"} strokeWidth={2} />

            <line className={"VerticalLine"} x1={0} x2={0} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={100} x2={100} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={200} x2={200} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={300} x2={300} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={400} x2={400} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={500} x2={500} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={600} x2={600} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={700} x2={700} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={800} x2={800} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={900} x2={900} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={1000} x2={1000} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={1100} x2={1100} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />
            <line className={"VerticalLine"} x1={1200} x2={1200} y1={0} y2={800} stroke={"#0000FF"} strokeWidth={2} />

            <text className="HorizontalText" textAnchor="start" x={0} y={25} fontSize={30} fill={"#000000"}>0</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={100} fontSize={30} fill={"#FF0000"}>100</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={200} fontSize={30} fill={"#FF0000"}>200</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={300} fontSize={30} fill={"#FF0000"}>300</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={400} fontSize={30} fill={"#FF0000"}>400</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={500} fontSize={30} fill={"#FF0000"}>500</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={600} fontSize={30} fill={"#FF0000"}>600</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={700} fontSize={30} fill={"#FF0000"}>700</text>
            <text className="HorizontalText" textAnchor="start" x={0} y={800} fontSize={30} fill={"#FF0000"}>800</text>

            <text className="VerticalText" textAnchor="end" x={100} y={25} fontSize={30} fill={"#0000FF"}>100</text>
            <text className="VerticalText" textAnchor="end" x={200} y={25} fontSize={30} fill={"#0000FF"}>200</text>
            <text className="VerticalText" textAnchor="end" x={300} y={25} fontSize={30} fill={"#0000FF"}>300</text>
            <text className="VerticalText" textAnchor="end" x={400} y={25} fontSize={30} fill={"#0000FF"}>400</text>
            <text className="VerticalText" textAnchor="end" x={500} y={25} fontSize={30} fill={"#0000FF"}>500</text>
            <text className="VerticalText" textAnchor="end" x={600} y={25} fontSize={30} fill={"#0000FF"}>600</text>
            <text className="VerticalText" textAnchor="end" x={700} y={25} fontSize={30} fill={"#0000FF"}>700</text>
            <text className="VerticalText" textAnchor="end" x={800} y={25} fontSize={30} fill={"#0000FF"}>800</text>
            <text className="VerticalText" textAnchor="end" x={900} y={25} fontSize={30} fill={"#0000FF"}>900</text>
            <text className="VerticalText" textAnchor="end" x={1000} y={25} fontSize={30} fill={"#0000FF"}>1000</text>
            <text className="VerticalText" textAnchor="end" x={1100} y={25} fontSize={30} fill={"#0000FF"}>1100</text>
            <text className="VerticalText" textAnchor="end" x={1200} y={25} fontSize={30} fill={"#0000FF"}>1200</text>
        </g>
    );
}

export default GridLines;