import React from 'react';
import {Button} from 'react-native';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userInfo=', userInfo);
    // this.setState({ userInfo });
  } catch (error) {
    console.log('error=', error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

const Login = () => {
  const handleMoveGoogle = async () => {
    await signIn();
  };

  return <Button title="Login with Google" onPress={handleMoveGoogle} />;
};

export default Login;
