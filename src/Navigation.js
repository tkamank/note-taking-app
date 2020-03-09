import * as React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, StackActions} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import HomeScreen from './screens/Home';
const Stack = createStackNavigator();


function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName ="Login">
                <Stack.Screen name = "Login" component={Login}/>
                <Stack.Screen name ="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;
