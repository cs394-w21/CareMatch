import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryRecommendations from "./screens/CategoryRecommendations";
import SingleProductScreen from "./screens/SingleProductScreen";
import Questionnaire from "./screens/Questionnaire";
import Home from "./screens/Home";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          component={WelcomeScreen}
          name="WelcomeScreen"
          options={{ headerShown: false, title: "Juno" }}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerShown: false, title: "Juno" }}
        />
        <Stack.Screen
          component={Questionnaire}
          name="Questionnaire"
          options={{ headerShown: false, title: "Juno" }}
        />
        <Stack.Screen
          component={RecommendationScreen}
          name="RecommendationScreen"
          options={{ headerShown: false, title: "Juno" }}
        />
        <Stack.Screen
          component={CategoryRecommendations}
          name="CategoryRecommendations"
          options={{ headerShown: false, title: "Juno" }}
          initialParams={{ area: "Hygeine", score: "45" }}
        />
        <Stack.Screen
          component={SingleProductScreen}
          name="SingleProductScreen"
          options={{ headerShown: false, title: "Juno" }}
        />

        <Stack.Screen
          component={LoginScreen}
          name="LoginScreen"
          options={{ headerShown: false, title: "Log In to Juno" }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="SignUpScreen"
          options={{ headerShown: false, title: "Register for Juno" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
