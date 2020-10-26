import React from "react";
import Svg, { Path } from "react-native-svg";
function Icon() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-rotate-ccw"
            viewBox="0 0 24 24"
        >
            <Path d="M1 4L1 10 7 10"></Path>
            <Path d="M3.51 15a9 9 0 102.13-9.36L1 10"></Path>
        </Svg>
    );
}

export default Icon;
