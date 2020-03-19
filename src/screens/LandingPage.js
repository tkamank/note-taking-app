import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class HomeScreen extends Component{
    static navigationOptions = () => {
        return {
          
        }
    }



render(){
    return(
            <View>
                <Text>I'm Here! :)</Text>
            </View>
        );
    }
}

// ... other code from the previous section