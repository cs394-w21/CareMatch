import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { theme } from "../utils/theme";
const nurse = {
  name: "Jane Brigham, RN",
  title: "Registered Nurse",
  location: "Chicago, IL",
  blurb:
    "Jane is a graduate of Worcester City Hospital School of Nursing. She worked for 10 years as an RN with a specialization in Senior Care. Now  she leads a highly skilled team of registered nurses at Juno. As a certified Clinical Nurse Liaison, Jane finds fulfillment in helping people in finding the best support care guidance and securing continuity of care for their loved ones.",
};

const buttons = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => {
          Linking.openURL(`tel:5555555555`);
        }}
      >
        <Text style={[styles.buttonText, styles.primaryButtonText]}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const NurseContact = () => {
  return (
    <View style={{ marginBottom: 30 }}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Want to talk with someone?</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../assets/nurse_jane.png")}
        ></Image>
        <Text style={styles.text}>{nurse.name}</Text>
        <Text style={styles.text}>{nurse.title}</Text>
        <Text style={styles.text}>{nurse.location}</Text>
        <Text style={[{ marginTop: 16 }]}>{nurse.blurb}</Text>
        {buttons()}
      </View>
    </View>
  );
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
    width: 157,
    height: 52,
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
export default NurseContact;
