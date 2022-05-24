import {useMMKVObject} from 'react-native-mmkv';

const useStorage = () => {
  const [username, setUsername] = useMMKVObject('user');

  return [username, setUsername];
};

export default useStorage;
