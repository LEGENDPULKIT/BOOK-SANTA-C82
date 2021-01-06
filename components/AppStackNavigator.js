import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {AppTabNavigator} from './AppTabNavigator';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';
import BookDonateScreen from '../screens/BookDonateScreen';

export const AppStackNavigator=createStackNavigator({
    BookDonate:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:false,
        }
    },

    ReceiverDetails:{
        screen:ReceiverDetailsScreen,
        navigationOptions:{
            headerShown:false,
        }
    }
},
{
    initialRouteName:'BookDonate'
}
)

