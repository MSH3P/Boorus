import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Menu = () => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
        >
            <Path d="M3 12h18M3 6h18M3 18h18" />
        </Svg>
    );
};

export default Menu;
