import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import MainApp from './src/MainApp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ title: 'App' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;