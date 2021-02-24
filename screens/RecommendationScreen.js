import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { theme } from "../utils/theme";
import SupportScoreChart from "../components/SupportScoreChart";
import AreasOfConcern from "../components/AreasOfConcern";
import TopOptions from "../components/TopOptions";
import BottomCards from "../components/BottomCards";

const supportScore = 65;
const supportScoreDescription =
  "65 is a number bigger than 64 and less than 66.  65 is divisible by 13 and 5.  65 is 1 year and two months younger than the full retirement age in the US for those born in 1955.  After that the retirement age will gradually increase to 67 for those born in 1960 and after.";
const name = "Marv";
const areas = { "Hygiene": 45, "Managing Medications": 55 };

const RecommendationScreen = ({ navigation }) => {
  return (
    <View style={{ height: "100%" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TopOptions
          leftIcon={
            <Image
              style={styles.icon}
              source={require("../assets/chevron.png")}
            ></Image>
          }
          leftContent="Questionnaire"
          rightContent="Save Results"
        />
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
        <BottomCards />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  logo: {
    marginBottom: 40,
    overflow: "visible",
    width: 112,
    height: 49,
    alignSelf: "center",
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
  icon: {
    width: 12,
    height: 21,
    overflow: "visible",
  },
});
export default RecommendationScreen;
