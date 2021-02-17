import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import RecommendationScreen from "./screens/RecommendationScreen"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          component={WelcomeScreen}
          name="WelcomeScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={RecommendationScreen}
          name="RecommendationScreen"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
