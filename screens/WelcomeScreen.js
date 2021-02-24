import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../utils/theme";
import Carousel from "../components/WelcomeCarousel";

const Buttons = ({ showButtons, onGetStarted, onLogin, onSignUp }) => {
  console.log(showButtons);
  if (showButtons) {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={onLogin}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={onSignUp}
        >
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={onGetStarted}
        >
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default function WelcomeScreen({ navigation }) {
  const [showButtons, setShowButtons] = useState(true);
  const onGetStarted = () => {
    navigation.navigate("RecommendationScreen");
  };
  const onLogin = () => {
    navigation.navigate("LoginScreen");
  };
  const onSignUp = () => {
    navigation.navigate("SignUpScreen");
  };
  return (
    <View style={styles.container}>
      <Carousel setShowButtons={setShowButtons} />
      <Buttons
        showButtons={showButtons}
        onGetStarted={onGetStarted}
        onLogin={onLogin}
        onSignUp={onSignUp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: theme.textFontSize,
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
  primaryButtonText: {
    color: "white",
  },
  secondaryButtonText: {
    color: "black",
  },
  secondaryButton: {
    borderColor: "black",
    borderWidth: 2,
  },
  primaryButton: {
    backgroundColor: theme.pink,
    borderColor: theme.pink,
    borderWidth: 2,
  },
  button: {
    flex: 1,
    margin: 16,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    textTransform: "uppercase",
    minHeight: 60,
    minWidth: 60,
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
