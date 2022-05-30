import * as React from "react";
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = ({color}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} fill="none">
    <Path
      fill={color}
      d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.426 7.161C14.704 12.09 11.946 10 8.068 10 4.101 10 1.29 12.25.541 15.29l-.023.11A1.363 1.363 0 0 0 1.85 17h12.32c.09 0 .18-.01.269-.028a1.354 1.354 0 0 0 1.033-1.6l-.046-.21z"
    />
  </Svg>
);

export default ProfileIcon;
