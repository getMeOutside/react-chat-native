import React from 'react';
import Svg, {Path} from 'react-native-svg';

const VoiceIcon = ({color}) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} fill="none">
      <Path
        fill={color}
        d="M13.5 0C20.956 0 27 6.044 27 13.5S20.956 27 13.5 27 0 20.956 0 13.5 6.044 0 13.5 0zm-1.833 6a1 1 0 0 0-1 1v13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1zm6.663 2a1 1 0 0 0-1 1v9.5a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1zM15 8.75a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1zM8.5 9a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1zm-3.167 3a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V13a1 1 0 0 0-1-1zm16.334 0a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V13a1 1 0 0 0-1-1z"
        opacity={0.45}
      />
    </Svg>
  );
};

export default VoiceIcon;
