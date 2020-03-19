import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    Image,
    ImageBackground,
    Text,
    Button
} from 'react-native';
import {StackActions, NavigationActions, NavigationContainer, NavigationSwitchScreenProps } from '@react-navigation/native';
import { createDrawerNavigation, createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./Login"
import LandingPage from "./LandingPage";
const Drawer  = createDrawerNavigator();

export default class HomeScreen extends Component{
    static navigationOptions = () => {
        return {
          
        }
    }



render(){
    return(
            <Drawer.Navigator initialRouteName="LandingPage">
                <Drawer.Screen name="LandingPage"component={LandingPage}/>
                <Drawer.Screen name="Login"component={Login}/>
            </Drawer.Navigator> 
        );
    }
}