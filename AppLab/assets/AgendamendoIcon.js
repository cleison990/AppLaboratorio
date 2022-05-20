import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const AgendamentoIcon = () => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFcUlEQVR4nO2dS2xUVRjHf58xFCK+ootSdCNiEx8UisojGoMPEoKJxsQQTHTla2+kuDFxY4yoxJVUFxJJWGg0JNj4ojS60OCC0AJNxGiiUUGhQFKIDNX+XdwpVHrv9M49957bOz2/ZDZn5nznP/+e+eY75547hUAgEAgEAoFAIBCYoVjeASWtBR4H7gVuAK7IewwPnAUOATuBXjOruQbMzWhJncB7RAa3EoPAw2b2m0uQXIyWdB+wC7gmj3gzkEFghcvMvsxVQX0mt7LJAF3Asy4BnI0mShetbPIET7h0dkodkh4CvnSJUSFGzeyqrJ1dZ/QGx/5V4kqXzq5G3+PYf9bgavTCXFTMAlxztPISUgXMLLNfeVQdgRQEoz0RjPZEMNoTwWhPBKM9EYz2RDDaE8FoTwSjPRGM9kQw2hPBaE8Eoz0RjPZEMNoTwWhPBKM9EYz2RDDaE8FoTwSjPRGM9sTlZQsoiXHgIPA1cBg4AvwKnCI6hG7A1fXHjcDt9UdmZtMBmnEiYz8AdpvZiM/BZ8OMrgHvA1vM7OeyRLSy0QJ2AC+Z2R9li2lVo48Az5jZN2ULmaAVjf4YeNrMTpctZDKtZLSAF83szVQvltqA1cAa4A6gE2gH5tdjnQWOEn06hoAB4Ls8boVrGs0cxiQ9lVLzcknvSjqdYZxTknoldRft7aWiZwLjSmGypG5JX+Q47meSlvrweaYY/cI0GudJelvSPwWMPSZpq6S5rW70zmn0dUoa8qDjgKTFjbRUeWV4BLjTzEbjnpS0AugDrvOk5wSw3sy+j3uyqptKIqqTG5m8B38mA1wP9Eu6O+7Jqhq9I2kxouiW6T6iMs0384G+uDRSxdRxDlgUt6yWNA/YR1QXl8kgsNLMzk00VHFGb2+wd/Ea2U0+D2wCOuqPnnpbFrqAVzP2nYqHb/NL+VfSTQlauuVWwm2KidnjEG9MUldVje5voMV1MbIgJma7Y8y+iVhVSx074holLQfWugQ2s6MxbcdcYgLrJC2Dahkt4NOE557zKaQJjPoPqlSp6jhgZstiNLQBfxJd38tM0n3eObzHU0B7lWZ00ib+ahxNLphrgVVVMvpwQvsaryqysaZKRv+Q0J5PCVUsS6pk9C8J7Q13zepcWIxYAkkdG7y+mUXNLSlek4xjjdkssRtEkk6k6DtlMZIXSreoOV6lqqPNzKbMHkk1YM40fTvi6uQ8kNROdG2xEbWiUsd5oo/VwqSPXgay7jtAAb/BOolUHhZl9Mtm9nqDzZ88id2TvoQnCxw/zUXhNBqTaZCTOpwCN6dhOEWOrNVzaW66JHXUY9ZSjH/INUePEr/BvtDTbEbSLuAR1zgFrgwBPnFNHb8ntKc6Y5ETgx7HysqQq9FJy+JXJG32lEIGPIzhyoBr6ngQ+ConMdMxbGa3xWhoA47h+Iu/BaaOk8ACpxltZnuAvY5C0nKrpEUxGmrAR540ZOFDMzufR3n3PNFfzQfrEtq3eRq/WQT0Qg51tJn9CDyKH7M3JmjYD3zuEjju+ySH75g+MzvgGOP/SLpZ0t4UNaUryxPGX6rogmhWemJibnaINyapuGMPkh5QdLR1WNKog9AktjcYe6tD3AuLGjW3GEliy2RtRe4BeEfRqc5vgSmXvDwzRHSA5u+JhirtR0+LRSeDNhAdOCyL48Bjk02GFjMaLnw5rwfOlDD8GaITpT+VMHY5SLpL0l8OObZZRiStKvt9l4KkxYoOiRfNfsUspmYVkuZKektupV8SY5LeUNG3VlQJSV2S+hTdXOTKuKTdKrJOrjqSlknaJulkBoNHJL2jDHdjtVQd3QyS5gArgfuBJURHAtq5+B+ERrl4Q+dBoB/Yl/Xa5X/iqoT9WgrrWgAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
)

export default AgendamentoIcon;
