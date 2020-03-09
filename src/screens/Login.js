import React, {Component} from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Image,
    ImageBackground,
} from 'react-native';
import {StackActions, NavigationActions, NavigationSwitchScreenProps } from '@react-navigation/native';

export default class LoginScreen extends Component{
static navigationOptions = () => {
    return {
        header: () => null
    }
}


render(){
    return(
        <View style = {{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text>noteApp</Text>
        </View>

        )
    }
}