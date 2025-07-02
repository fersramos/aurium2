import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from './home';
import Modulos from './modulos';
import Perfil from './perfil';
import Premios from './premios';
import Scanner from './scanner';



const Tab= createBottomTabNavigator();

export default function Tabs (){
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#E9E9E9', borderTopColor: 'transparent',paddingBottom:5, paddingTop:5 },
        tabBarActiveTintColor: '#1976D2',
        tabBarInactiveTintColor: '#3F3F3F',
      
      }}>
        
      <Tab.Screen 
      name='home'
       component={Home} 
       options={{
        tabBarIcon: ({focused}) => (
          <Image source={require('../../assets/images/homeicon.png')} 
         style={{
          width:60,
          height: 60,
          tintColor: focused ? '#1976D2' : '#3F3F3F', 
        }}
        resizeMode="contain" />
        )
       }}
      />
      <Tab.Screen 
      name='premios'
       component={Premios} 
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../../assets/images/premiosicon.png')} 
            style={{
              width: 50,
              height: 50,
              tintColor: focused ? '#1976D2' : '#3F3F3F', 
            }}
            resizeMode="contain" />
          )
        }}
      />
      <Tab.Screen 
      name='modulos' 
      component={Modulos} 
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={require('../../assets/images/modulosicon.png')} 
          style={{
            width: 50,
            height: 50,
            tintColor: focused ? '#1976D2' : '#3F3F3F', 
          }}
          resizeMode="contain" />
        )
      }}
      />
      <Tab.Screen
      name='scanner'
       component={Scanner}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../../assets/images/scannericon.png')} 
            style={{
              width: 50,
              height: 50,
              tintColor: focused ? '#1976D2' : '#3F3F3F', 
            }}
            resizeMode="contain" />
          ),
        }}
      />
      <Tab.Screen 
      name='perfil' 
      component={Perfil} 
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={require('../../assets/images/perfilicon.png')} 
          style={{
            width: 60,
            height: 60,
            tintColor: focused ? '#1976D2' : '#3F3F3F', 
          }}
          resizeMode="contain" />
        )
      }}
      />
    </Tab.Navigator>
  )
}