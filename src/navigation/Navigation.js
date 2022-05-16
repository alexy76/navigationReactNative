import * as React from 'react'
import { View, Text, StyleSheet, Button }from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'


import HomeScreen from '../screens/HomeScreen'
import ImageScreen from '../screens/ImageScreen'
import CalendarScreen from '../screens/CalendarScreen'


const { Navigator, Screen } = createBottomTabNavigator()

const Navigation = () => {

    return (
    
    <NavigationContainer>

        <Navigator 

        initialRouteName='Home' 
        screenOptions={({ route }) => ({

        
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Home')
              iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Image')
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            else if (route.name === 'Calendar')
              iconName = focused ? 'calendar' : 'calendar-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>

            <Screen name='Home' component={HomeScreen} />
            <Screen name='Image' component={ImageScreen} />
            <Screen name='Calendar' component={CalendarScreen} />

        </Navigator>

    </NavigationContainer>
    )
}

    


export default Navigation