import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";

// -- screens
import Home from "../screen/home/Home";
import SingleDonationItemScreen from "../screen/singleDonationItemScreen/SingleDonationItemScreen";
import LoginScreen from "../screen/login/LoginScreen";
import RegisterScreen from "../screen/register/RegisterScreen";


const Stack = createStackNavigator();

const MainNavigation = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} >
      <Stack.Screen options={{ headerShown: false}} name={Routes.login}  component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false}} name={Routes.register}  component={RegisterScreen} />
      <Stack.Screen options={{ headerShown: false}} name={Routes.home} component={Home} />
      <Stack.Screen options={{ headerShown: false}} name={Routes.singleDonationItemScreen} component={SingleDonationItemScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;