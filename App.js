import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          component={RecommendationScreen}
          name="RecommendationScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={WelcomeScreen}
          name="WelcomeScreen"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          component={LoginScreen}
          name="LoginScreen"
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="SignUpScreen"
          options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
