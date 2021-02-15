import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import theme from "../utils/theme";
import Swiper from "react-native-web-swiper";

const Screen = () => {
  return (
    <View style={styles.container}>
      <Swiper>
        <View style={[styles.slideContainer, styles.slide1]}>
          <Text>
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
      <Text style={styles.title}>CareMatch</Text>

      {Screen()}
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
    justifyContent: "center",
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
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
    fontSize: 30,
    fontWeight: "bold",
  },
});
