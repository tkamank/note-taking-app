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
  import { NavigationContainer } from '@react-navigation/native';
  import {createStackNavigator } from '@react-navigation/stack';
export default class LoginScreen extends Component{
static navigationOptions = () => {
    return {
        header: () => null
    }
}

/*
_resetToScreen = (routeName) => {
    NavigationActions.navigate(routeName);
    console.log("Received.");
}
*/
/*
_resetToScreen  (routeName) {
  console.log("Reset to screen started.");
    const { navigation } = this.props;
  const resetAction = StackActions.reset({
    index: 0, 
    actions: [NavigationActions.navigate({routeName})]
  });
  navigation.dispatch(resetAction);
  console.log("End reached.");
}
*/
goToHome = () => {
  console.log("Reached Home Movement");
  this.props.navigation.navigate('Home');
  console.log("Reached Home!");
};




_signIn = async () => {
    try {
      console.log("Landing page.");
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //console.log(userInfo);
      console.log("Data");
      //this._resetToScreen("Home");
      this.goToHome();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        
      } else {
        // some other error happened
        console.log(error);
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