import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PhoneIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none">
    <Path
      fill="#0084FE"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
    />
    <Path
      fill="#fff"
      d="m18.345 21.653.1.1c1.738 1.683 3.192 2.473 4.362 2.37l.337-.314c.48-.437.842-.713 1.086-.83.507-.244.863-.239 1.825.282a11.275 11.275 0 0 1 2.585 1.926c.415.415.286 1.129.14 1.446l-.096.176c-.26.45-1.198 1.935-2.998 2.189-.685.096-1.548.008-2.56-.297-2.17-.751-4.33-2.128-6.48-4.13l-.384-.363-.003.004-.185-.188-.188-.185.004-.003-.364-.383c-2.001-2.15-3.377-4.31-4.128-6.48-.305-1.012-.394-1.876-.297-2.56.271-1.928 1.954-2.868 2.267-3.043l.032-.018c.27-.157 1.065-.34 1.511.106l.211.217c.46.487 1.129 1.284 1.716 2.368.52.962.525 1.318.282 1.826-.143.298-.525.772-1.145 1.422-.102 1.17.688 2.625 2.37 4.362z"
    />
  </Svg>
);

export default PhoneIcon;