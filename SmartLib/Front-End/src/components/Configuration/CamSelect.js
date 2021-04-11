//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: CamSelect.js                                                                                              //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports Configuration Component for Camera Selection.                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import L2C1 from "../Img/L2C1.jpg";
import L3C1 from "../Img/L3C1.jpg";
const L4C1 = 'http://10.27.137.242:8080/video';
const L5C1 = 'http://10.27.75.153:8080/video';

export default function cameraSelect(level)
{
    switch (level) {
        case '2':
            return L2C1;
        case '3':
            return L3C1;
        case '4':
            return L4C1;
        case '5':
            return L5C1;
    }
}