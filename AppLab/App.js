import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./pages/Login.js";
import PreLoad from "./pages/PreLoad.js";
import Register from './pages/Register.js';
import Agendamento from './pages/Agendamento.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Agendamento"} component={Agente}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="PreLoad" component={PreLoad}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


