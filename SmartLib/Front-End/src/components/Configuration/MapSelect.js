//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: MapSelect.js                                                                                              //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports Configuration Component for Map Selection.                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import L2Map from "../Img/L2Map.svg";
import L3Map from "../Img/L3Map.svg";
import L4Map from "../Img/L4Map.svg";
import L5Map from "../Img/L5Map.svg";

export default function mapSelect(level)
{
    switch (level) {
        case '2':
            return L2Map;
        case '3':
            return L3Map;
        case '4':
            return L4Map;
        case '5':
            return L5Map;
    }
}