import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../utils/theme";

export default function Everything() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CareMatch</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.green,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
});
