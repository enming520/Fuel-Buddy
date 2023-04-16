import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import List from './List';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard';
import ResetPasswordPage from './ResetPasswordPage';
import React, { useState } from 'react';
import UserContext from './UserContext';
import Settings from './components/Settings';
import DistanceContext from './DistanceContext';
import SubscriptionPage from './components/SubscriptionPage';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 15,
          bottom: 15,
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          //elevation: 0,
          backgroundColor: '#fec619',
          //borderTopLeftRadius: 17,
          //borderTopRightRadius: 17,
          height: 70,
        },
        headerShown: false,
        headerStyle: {
          backgroundColor: '#5856D6',
          height: 60,

        },
        headerTitleStyle: {
          color: '#5856D6',
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Map') {
            iconName = focused
              ? 'map'
              : 'map-outline';

          } else if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          //return component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#333333',
      })}>
      <Tab.Screen name="Map" component={StackNavigator} />
      <Tab.Screen name="List" component={ListStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}


function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
      <Stack.Screen name="SubscriptionPage" component={SubscriptionPage} />
    </Stack.Navigator>
  );
}

function ListStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NestedList" component={List} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}


export default function App() {
  const [user, setUser] = useState(null);
  const [range, setRange] = useState(1500);
  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <DistanceContext.Provider value={{ range, setRange }}>
          <TabNavigator />
        </DistanceContext.Provider>
      </UserContext.Provider>
    </NavigationContainer>
  );
}

