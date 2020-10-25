import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-info"
            {...props}
        >
            <Circle cx={12} cy={12} r={10} />
            <Path d="M12 16v-4M12 8h.01" />
        </Svg>
    );
}

export default SvgComponent;
