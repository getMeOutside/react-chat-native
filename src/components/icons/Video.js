import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const VideoIcon = ({color}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} fill="none">
    <Path
      fill={color}
      d="M12.5 0a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h9zm8.9 3.471a.8.8 0 0 1 .1.389v6.28a.8.8 0 0 1-1.189.7l-2.797-1.554A1 1 0 0 1 17 8.412V5.588a1 1 0 0 1 .514-.874l2.797-1.554a.8.8 0 0 1 1.088.311z"
    />
  </Svg>
);

export default VideoIcon;
