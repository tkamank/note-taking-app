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


render(){
    return(
        <View style = {{flex: 1, flexDirection: "column", marginBottom: 100, justifyContent: "center", alignItems: "center" }}>
            <Text>noteApp</Text>
            <GoogleSigninButton style={{ width: "50%", marginBottom: 10, marginTop: 50 }} onPress={this._signIn} />
        </View>

        )
    }
}