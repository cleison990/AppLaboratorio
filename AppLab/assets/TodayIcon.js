import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const todayIcon = () => (
  <Svg
    width={53}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Path fill="url(#a)" d="M0 0h53v45H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00943 0 0 .01111 .075 0)" />
      </Pattern>
      <Image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default todayIcon;
