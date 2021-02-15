import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme, textFont } from "../utils/theme";
import Swiper from "react-native-web-swiper";

const Screen = () => {
  return (
    <View style={styles.container}>
      <Swiper>
        <View style={[styles.slideContainer, styles.slide1]}>
          <Text style={styles.title}>CareMatch(logo placeholder)</Text>
          <Text style={styles.hiText}>Hi!</Text>
          <Text style={styles.text}>
            Hello UserName, AppName gives you specific recommendations to help
            you make informed decisions for your aging loved one.
          </Text>
        </View>
        <View style={[styles.slideContainer, styles.slide2]}>
          <Text>
            To start, we will ask you a couple quick questions to get a better
            idea on the current status of your aging loved one.
          </Text>
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Text>
            Then, we will connect you with articles, products and services, and
            conversation starters, to help you navigate the aging journey and
            better engage with your aging loved one.
          </Text>
        </View>
        <View style={[styles.slideContainer, styles.slide4]}>
          <Text>That's it! Let's get started.</Text>
        </View>
      </Swiper>
    </View>
  );
};
export default function Everything() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      {Screen()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButtons}>
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtons}>
          <Text style={styles.text}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 60,
    textAlign: "center",
  },
  slide1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: textFont,
    textAlign: "center",
  },
  hiText: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: textFont
  },

  loginButtons: {
    flex: 1,
    margin: 40,
    padding: 10,
    elevation: 2,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 20,
    opacity: 0.8,
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
});
