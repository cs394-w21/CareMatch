import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../utils/theme";
import { firebase } from "../firebase";

const body =
  "Gurl, you need some help. Register pretty plz. I'll be your best friend, promise. Also I'll never spam you with emails because I'm not good enough at programming to know how to do that.";

const buttons = (navigation) => {
  return (
    <View style={{ marginTop: 30 }}>
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <Text style={[styles.buttonText, styles.primaryButtonText]}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RegisterCard = ({ navigation, name }) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);
  if (firebase.auth().currentUser) {
    return <View />;
  } else {
    return (
      <View
        style={{
          marginBottom: 30,
          backgroundColor: "rgba(255, 38, 111, 0.17)",
          padding: 43,
        }}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>
            Let’s help you manage support needs throughout {name}'s journey.
          </Text>
          <Text style={styles.sectionBody}>{body}</Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {buttons(navigation)}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: theme.textFont2,
    fontSize: 15,
    fontWeight: "900",
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 128 / 2,
    overflow: "hidden",
    margin: 30,
  },
  text: {
    fontFamily: theme.textFont2,
    fontWeight: "900",
    fontSize: 15,
    lineHeight: 15,
    textTransform: "uppercase",
  },
  primaryButtonText: {
    color: "white",
  },
  secondaryButtonText: {
    color: "black",
  },
  button: {
    margin: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    textTransform: "uppercase",
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
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  sectionHeader: {
    fontFamily: theme.textFont,
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "left",
  },
  sectionContainer: {
    flex: 1,
    alignItems: "flex-start",
    width: "95%",
    marginTop: 26,
    marginBottom: 0,
  },
  sectionBody: {
    fontFamily: theme.textFont2,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "left",
  },
  expandSection: {
    color: theme.pink,
  },
});
export default RegisterCard;
