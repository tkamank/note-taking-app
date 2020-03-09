import React, {Component} from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Image,
    ImageBackground,
    Text
} from 'react-native';
import {StackActions, NavigationActions, NavigationSwitchScreenProps } from '@react-navigation/native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';

export default class LoginScreen extends Component{
static navigationOptions = () => {
    return {
        header: () => null
    }
}

_signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
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

render(){
    return(
        <View style = {{flex: 1, flexDirection: "column", marginBottom: 100, justifyContent: "center", alignItems: "center" }}>
            <Text>noteApp</Text>
            <GoogleSigninButton style={{ width: "50%", marginBottom: 10, marginTop: 50 }} onPress={this._signIn} />
        </View>

        )
    }
}