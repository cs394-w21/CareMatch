import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../utils/theme";
import Carousel from "../components/WelcomeCarousel";

const Buttons = ({ showButtons }) => {
  console.log(showButtons);
  if (showButtons) {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.primaryButton]}>
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.primaryButton]}>
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default function WelcomeScreen() {
  const [showButtons, setShowButtons] = useState(true);

  return (
    <View style={styles.container}>
      <Carousel setShowButtons={setShowButtons} />
      <Buttons showButtons={showButtons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: theme.textFontSize,
    //fontWeight: "bold",
    fontFamily: theme.textFont,
    textAlign: "center",
  },
  primaryText: {
    color: "black",
  },
  secondaryText: {
    color: "white",
  },
  buttonText: {
    fontFamily: theme.textFont2,
    fontSize: 13,
  },
  buttonText: {
    fontFamily: theme.textFont2,
    fontSize: 13,
  },
  primaryButtonText: {
    color: "white",
  },
  secondaryButtonText: {
    color: "black",
  },
  button: {
    flex: 1,
    margin: 16,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    textTransform: "uppercase",
    minHeight: 80,
    minWidth: 80,
  },
  secondaryButton: {
    borderColor: "black",
    borderWidth: 2,
  },
  primaryButton: {
    backgroundColor: theme.pink,
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
