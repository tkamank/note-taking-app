import * as React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, StackActions} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-community/google-signin';
import {CLIENT_ID, IOS_CLIENT_ID} from 'react-native-dotenv';

import Login from './screens/Login';
import Home from './screens/Home';
import HomeScreen from './screens/Home';
const Stack = createStackNavigator();

GoogleSignin.configure({
    scopes: [], // what API you want to access on behalf of the user, default is email and profile
    webClientId: CLIENT_ID , // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: IOS_CLIENT_ID  // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });

function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName ="Home">
                <Stack.Screen name = "Login" component={Login}/>
                <Stack.Screen name ="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;
