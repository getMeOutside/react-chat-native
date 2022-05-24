import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DarkModeIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none">
    <Path
      fill="#000"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
    />
    <Path
      fill="#fff"
      d="M16.75 13.25a9 9 0 0 0 11.445 8.664l.37-.113a.613.613 0 0 1 .795.7l-.03.103A10.003 10.003 0 0 1 20 29c-5.523 0-10-4.477-10-10 0-4.065 2.425-7.563 5.907-9.127l.123-.053.138-.056a.728.728 0 0 1 .984.793l-.021.095a9.001 9.001 0 0 0-.381 2.598z"
    />
  </Svg>
);

export default DarkModeIcon;
