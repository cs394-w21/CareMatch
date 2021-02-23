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
import NurseContact from "../components/NurseContact";
import TopOptions from "../components/TopOptions";

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

const RecommendationScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopOptions leftContent="Questionnaire" rightContent="Save Results" />
      <SupportScoreChart percent={supportScore} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>
          Support Score of {supportScore}
        </Text>
        <Text style={styles.sectionBody}>{supportScoreDescription}</Text>
        <Text style={[styles.expandSection, styles.sectionBody]}>
          Read More
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Areas of Concern</Text>
        <View style={styles.line} />
        <AreasOfConcern navigation={navigation} areas={areas} name={name} />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>
          Read about other support categories
        </Text>
        <Text style={[styles.sectionBody]}>
          {name} scored well in our other support categories, but you can read
          more about [category], [category], and others, if you like.
        </Text>
        <Text
          style={[
            styles.expandSection,
            styles.sectionBody,
            { paddingBottom: 16 },
          ]}
        >
          Learn about other categories
        </Text>
        <View style={styles.line} />
      </View>
      <NurseContact />
      <Image
        style={styles.logo}
        source={require("../assets/juno_black.png")}
      ></Image>
      <Unorderedlist style={listBullet}>
        <Text
          style={textLink}
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/search?q=how+to+care+for+your+aging+parents&oq=how+to+care+for+your+aging+parents&aqs=chrome..69i57j46j0j0i22i30l4j0i390.4373j0j7&sourceid=chrome&ie=UTF-8"
            )
          }
        >
          How to Care for Your Aging Parents
        </Text>
      </Unorderedlist>
    </ScrollView>
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
export default RecommendationScreen;
