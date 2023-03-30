import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Search from './Search';
import Profile from './ProfilePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard';
import ResetPasswordPage from './ResetPasswordPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({route}) => ({
      tabBarActiveTintColor:'white',
      tabBarLabelStyle:{
        fontWeight:'bold',
        fontSize: 15,
        bottom: 15,
      },
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        //elevation: 0,
        backgroundColor: '#5856D6',
        //borderTopLeftRadius: 17,
        //borderTopRightRadius: 17,
        height: 70,
      },
      headerShown: false,

      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Map') {
          iconName = focused
            ? 'location'
            : 'location-outline';
            
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        
        //return component
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#A9A9A9',
    })}>
    <Tab.Screen name="Map" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Profile" component={StackNavigator} />
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
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
        </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
     <TabNavigator/>
    </NavigationContainer>
  );
}

