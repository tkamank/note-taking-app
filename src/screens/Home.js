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

export default class HomeScreen extends Component{



render(){
    return(
        <View style = {{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text>Home</Text>
        </View>

        )
    }
}