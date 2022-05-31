import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

const AttachIcon = ({color}) => {
  return (
    <TouchableOpacity>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        fill="none"
        opacity={0.45}>
        <Path
          fill={color}
          d="M7.82 22.66h14.36c1.743 0 2.607-.863 2.607-2.573V9.952c0-1.71-.864-2.574-2.607-2.574H7.82c-1.735 0-2.607.855-2.607 2.574v10.135c0 1.718.872 2.573 2.607 2.573zM19 14.998c-.374-.332-.805-.506-1.253-.506-.457 0-.864.158-1.246.498l-3.751 3.354-1.536-1.395c-.349-.307-.73-.473-1.12-.473-.374 0-.723.158-1.072.465L6.55 19.174v-9.156c0-.863.456-1.303 1.286-1.303h14.328c.821 0 1.286.44 1.286 1.303v9.164L19.001 15zm-7.604.092c1.071 0 1.951-.88 1.951-1.96 0-1.07-.88-1.958-1.95-1.958-1.08 0-1.96.888-1.96 1.959 0 1.079.88 1.959 1.96 1.959z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default AttachIcon;
