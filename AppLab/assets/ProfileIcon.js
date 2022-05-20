import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const ProfileIcon = () => (
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

export default ProfileIcon;
