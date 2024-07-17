import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../components/screens/Welcome.js";
import HomeScreen from "../components/screens/Home.js";
import LoginScreen from "../components/screens/Login.js";
import SignupScreen from "../components/screens/Signup.js";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    //<NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default StackNavigator;
