import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme, textFont } from "../utils/theme";
import Swiper from "react-native-web-swiper";

const Screen = ({ setShowButtons }) => {
  const onIndexChanged = (index) => {
    console.log(index);
    index === 3 ? setShowButtons(false) : setShowButtons(true);
  }
  return (
    <View style={styles.container}>
      <Swiper onIndexChanged={onIndexChanged}>
        <View style={[styles.slideContainer, styles.slide1]}>
          <Text style={styles.title}>CareMatch(logo placeholder)</Text>
          <Text style={styles.hiText}>Hi!</Text>
          <Text style={styles.text}>
            Hello UserName, AppName gives you specific recommendations to help
            you make informed decisions for your aging loved one.
          </Text>
        </View>
        <View style={[styles.slideContainer, styles.slide2]}>
          <Text style={styles.text}>
            To start, we will ask you a couple quick questions to get a better
            idea on the current status of your aging loved one.
          </Text>
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Text style={styles.text}>
            Then, we will connect you with articles, products and services, and
            conversation starters, to help you navigate the aging journey and
            better engage with your aging loved one.
          </Text>
        </View>
        <View style={[styles.slideContainer, styles.slide4]}>
          <Text style={styles.text}>That's it! Let's get started.</Text>
        </View>
      </Swiper>
    </View>
  );
};

const Buttons = ({ showButtons }) => {
  console.log(showButtons);
  if (showButtons) {
    return (
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
    )
  } else {
    return <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.text}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  }
}

export default function Everything() {
  const [showButtons, setShowButtons] = useState(true);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <Screen setShowButtons={setShowButtons} />
      <Buttons showButtons={showButtons} />

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
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000080",
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
  getStartedButton: {
    flex: 1,
    margin: 40,
    padding: 10,
    elevation: 2,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    opacity: 0.8,
  },
});
