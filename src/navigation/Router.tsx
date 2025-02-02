import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import DestinationSearchScreen from '../screens/DestinationSearch/DestinationSearchScreen';
import GuestsScreen from '../screens/Guests/GuestsScreen';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="Destination" component={DestinationSearchScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Guests" component={GuestsScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router