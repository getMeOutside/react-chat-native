import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

const SendMessageIcon = () => {
  return (
    <TouchableOpacity>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.56 122.88"
        width={20}
        height={20}
        opacity={0.45}>
        <Path
          fill="#000"
          d="m2.33 44.58 115-44.21a3.63 3.63 0 0 1 5 4.56l-44 115.61a3.63 3.63 0 0 1-6.67.28L53.93 84.14l35.19-50.37-50.27 35.09L2.06 51.24a3.63 3.63 0 0 1 .27-6.66z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default SendMessageIcon;
