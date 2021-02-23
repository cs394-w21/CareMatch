import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Header,
  Linking,
  ScrollView,
  Image,
} from "react-native";
import { theme } from "../utils/theme";
import ReactDOM from "react-dom";
import Unorderedlist from "react-native-unordered-list";
import SupportScoreChart from "../components/SupportScoreChart";
import AreasOfConcern from "../components/AreasOfConcern";
const supportScore = 65;
const supportScoreDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vincididunt ut labore et dolore magna aliqua. Ut enim";
const name = "Marv";
const areas = { Hygeine: 45, "Managing Medication": 55 };
const nurse = {
  name: "Jane",
  title: "Registered Nurse",
  location: "Chicago, IL",
};

const buttons = () => {
  return (
    <>
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => {
          return;
        }}
      >
        <Text style={[styles.buttonText, styles.primaryButtonText]}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => {
          return;
        }}
      >
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>
          Chat
        </Text>
      </TouchableOpacity>
    </>
  );
};

const NurseContact = ({ navigation }) => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Want to talk with someone?</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>{nurse.name}</Text>
        <Text>{nurse.title}</Text>
        <Text>{nurse.location}</Text>
        {buttons()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  title: {
    color: "#FF266F",
    padding: "40px",
    fontFamily: "Arial",
    textAlign: "center",
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
    fontFamily: "Georgia",
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
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "left",
  },
  expandSection: {
    color: theme.pink,
  },
  line: {
    height: 0,
    color: theme.gray,
    borderColor: theme.gray,
    borderWidth: 0.25,
    width: "100%",
  },
});
const textLink = {
  color: "#0000FF",
  fontFamily: "Arial",
  textDecorationLine: "underline",
};

const listBullet = {
  marginHorizontal: 20,
};
export default NurseContact;
