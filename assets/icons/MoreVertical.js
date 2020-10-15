import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const MoreVertical = () => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
        >
            <Circle cx={12} cy={12} r={1} />
            <Circle cx={12} cy={5} r={1} />
            <Circle cx={12} cy={19} r={1} />
        </Svg>
    );
};

export default MoreVertical;
