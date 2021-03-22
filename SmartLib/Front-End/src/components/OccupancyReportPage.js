import React from "react";
import {
    Pane,
    Button
} from "evergreen-ui";
import OccupancyReport from "./OccupancyReport";
import './OccupancyReportPage.css'
import Pdf from "react-to-pdf";

const ref = React.createRef();

function OccupancyReportPage(){

    return(
        <div >
            <Pane className={"bgPane"} border={'default'}>
                <Pane className={'buttonPane'}>
                    <Pdf targetRef={ref} filename="report.pdf" scale={0.5}>
                        {({ toPdf }) => <Button className={'downloadButton'} onClick={toPdf}>Download Report</Button>}
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