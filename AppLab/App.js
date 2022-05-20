import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Import dos Icones
import AgendamentoIcon from './assets/AgendamendoIcon.js';
import TodayIcon from './assets/TodayIcon.js';
import ProfileIcon from './assets/ProfileIcon.js';


//Import das Telas
import Login from "./pages/Login.js";
import PreLoad from "./pages/PreLoad.js";
import Register from './pages/Register.js';
import Schedule from './pages/Schedule';
import Today from './pages/Today.js';
import Profile from './pages/Profile.js';





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({
        headerShown: false,
        tabBarStyle: [
          styles.tabBarStyle
        ]
      })
}>
      <Tab.Screen 
        name={"Today"} component={Today}
        options={{
          tabBarLabel: 'Para Hoje',
          tabBarIcon: () => (
            <TodayIcon/>
          ),
        }}
      />
      <Tab.Screen 
        name={"Schedule"} component={Schedule}
        options={{
          tabBarLabel: 'Agendar',
          tabBarIcon: () => (
            <AgendamentoIcon/>
          ),
        }}
      />
      <Tab.Screen 
        name={"Profile"} component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => (
            <ProfileIcon/>
          ),
        }}
      />
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
        <Stack.Screen name="Agendamento" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.creat=({
  tabBarStyle: {
    backgroundColor: '#0D4B81',
    height: 80,
    justifyContent: 'center'
  }
});

