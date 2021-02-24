import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { theme } from "../utils/theme";
const nurse = {
  name: "Jane",
  title: "Registered Nurse",
  location: "Chicago, IL",
};

const buttons = () => {
  return (
    <View>
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
    </View>
  );
};

const NurseContact = ({ navigation }) => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Want to talk with someone?</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>{nurse.name}</Text>
        <Text>{nurse.title}</Text>
        <Text>{nurse.location}</Text>
        {buttons()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "left",
  },
  expandSection: {
    color: theme.pink,
  },
});
export default NurseContact;
