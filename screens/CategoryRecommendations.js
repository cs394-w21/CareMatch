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
import { circle } from "../components/AreasOfConcern";
import ProductsAndServices from "../components/ProductsAndServices";
import Articles from "../components/Articles";
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
const categoryScoreDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vincididunt ut labore et dolore magna aliqua. Ut enim. ";

const CategoryRecommendations = ({ route, navigation }) => {
  //area = "Hygeine";
  //score = 45;
  const { area, score } = route.params;
  const numProducts = 2;
  const numServices = 1;
  console.log(score);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopOptions
        leftContent="Assessment"
        leftAction={() => {
          navigation.navigate("RecommendationScreen");
        }}
        rightContent="Save Results"
      />
      <View style={styles.sectionContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={styles.sectionHeader}>
            {"\n\n" + name}'s {area} Score
          </Text>
          {circle(score)}
        </View>
        <Text style={styles.sectionBody}>{categoryScoreDescription}</Text>
        <Text style={[styles.expandSection, styles.sectionBody]}>
          Read More
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subSectionHeader}>For {name}, we recommend...</Text>
        <Text style={styles.sectionBody}>
          {numProducts} product(s) and {numServices} service(s). {name}'s score
          is also low enough that we think it would be useful to talk with one
          of our registerd nurses.
        </Text>
        <Text style={[styles.expandSection, styles.sectionBody]}>
          Contact Nurse
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <ProductsAndServices area={area} />
      </View>
      <View style={styles.sectionContainer}>
        <Articles area={area} />
      </View>
      <NurseContact />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
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
  subSectionHeader: {
    fontFamily: theme.textFont,
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 18,
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
export default CategoryRecommendations;
