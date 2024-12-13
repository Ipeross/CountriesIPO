import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContinentListScreen from './src/screens/ContinentsListScreen';
import NationListScreen from './src/screens/CountryScreen';
import CountryDetailsScreen from './src/screens/CountryInfoScreen';
import CountryInfoScreen from './src/screens/CountryInfoScreen';
import CountryScreen from './src/screens/CountryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Continentes">
        <Stack.Screen 
        name="Continentes" 
        component={ContinentListScreen} 
        />
        <Stack.Screen 
        name="Countries" 
        component={CountryInfoScreen} 
        />
        <Stack.Screen 
        name="CountryDetails" 
        component={CountryScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
  },
});

export default App;