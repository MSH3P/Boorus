import * as React from "react";
import Svg, { Path } from "react-native-svg";
function Save() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-save"
    >
      <Path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
      <Path d="M17 21v-8H7v8M7 3v5h8" />
    </Svg>
  );
}

export default Save;
