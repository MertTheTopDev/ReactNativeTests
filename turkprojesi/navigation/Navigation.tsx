import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PropsWithChildren } from "react";
import Home from "../screen/home";
import profile from "../screen/profile";

type NavigationProps = PropsWithChildren<{
  name?: string,
  phone?: number
}>;

const Stack = createStackNavigator();

export const Navigation = ({ children }: NavigationProps ) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={profile} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}