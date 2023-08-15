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
import {UserContext, UserProvider} from './context/UserContext';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isUserloggedin, setIsuserlogged] = useState(false);

  // const {isUserloggedin, setIsuserlogged} = useContext(UserContext);

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      </Stack.Group>
    );
  };

  return (
    <>
      <UserContext.Provider value={{setIsuserlogged}}>
        {/* <UserProvider > */}
        <NavigationContainer>
          <Stack.Navigator>
            {isUserloggedin ? getMainStack() : getAuthStack()}
          </Stack.Navigator>
        </NavigationContainer>
        {/* </UserProvider> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
