import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <WelcomeScreen />
    </>
  );
}
