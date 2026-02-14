import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Routes } from './Routes';
// screens
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();



export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator 
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <ProfileTabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={'Photos'} />
          ),
          tabBarStyle: {
            zIndex: 0
          }
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={'Videos'} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={'Saved'} />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

// Backward-compat export (typo fix) in case it’s referenced elsewhere.
export const ProfleTabsNavigation = ProfileTabsNavigation;

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
