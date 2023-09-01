/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {DashBoardScreen, HomeScreen, LoginScreen} from './containers';
import {MyContextProvider, useMyContext} from './context/MyContext';

const Stack = createNativeStackNavigator();

const Nav = () => {
  const {isLogin} = useMyContext();

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overivew'}}
        />
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isLogin ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </MyContextProvider>
  );
}

export default App;
