import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home/HomeScreen'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarActiveTintColor: '#f15454', tabBarInactiveTintColor: '#8d8d8d' }}>
            <Tab.Screen
                name="Explore"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Fontisto name="search" size={25} color={color} />)
                }}
            />
            <Tab.Screen
                name="Saved"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<FontAwesome name='heart-o' size={25} color={color}
                        />)
                }}
            />
            <Tab.Screen
                name="Airbnb"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<FontAwesome5 name='airbnb' size={25} color={color} />)
                }}
            />
            <Tab.Screen
                name="Messages"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Feather name='message-square' size={25} color={color} />)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Feather name='user' size={25} color={color} />)
                }}
            />

        </Tab.Navigator>
    )
}

export default HomeTabNavigator


