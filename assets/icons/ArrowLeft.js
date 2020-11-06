import * as React from "react";
import Svg, { Path } from "react-native-svg";
function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-left"
    >
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  );
}

export default SvgComponent;
