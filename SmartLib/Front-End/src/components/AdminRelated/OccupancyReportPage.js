//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: OccupancyReportPage.js                                                                                    //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Occupancy Report Page. Includes usage of OccupancyReport and PDF exporter to        //
//            enable saving report as PDF                                                                               //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import {
    Pane,
    Button,
    DownloadIcon
} from "evergreen-ui";
import OccupancyReport from "./OccupancyReport";
import './OccupancyReportPage.css'
import Pdf from "react-to-pdf";

// Creates a reference element for the PDF exporter
const ref = React.createRef();

function OccupancyReportPage(){
    return(
        <div >
            <Pane className={"bgPane"} border={'default'}>
                <h2 className={'heading'}>Seat Occupancy Report</h2>
                <Pane className={'buttonPane'}>
                    <Pdf targetRef={ref} filename="report.pdf" scale={0.5}>
                        {({ toPdf }) => <Button className={'downloadButton'} onClick={toPdf} appearance={"primary"} iconBefore={DownloadIcon}>Download Report</Button>}
                    </Pdf>
                </Pane>
                <Pane className={"reportPane"} border={'default'} ref={ref} >
                        <OccupancyReport/>
                </Pane>
            </Pane>
        </div>
    );
}

export default OccupancyReportPage;