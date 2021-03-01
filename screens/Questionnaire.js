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
import Survey from "../components/Survey";

const supportScore = 65;
const supportScoreDescription =
  "Based on the analysis, a support score of 65 means that Marv needs support and care. We recommend getting professional advice and consulting with a doctor. Marv’s hygiene and managing his medication are two areas where he needs the most support.";
const name = "Marv";
const areas = { Hygiene: 45, "Managing Medications": 55 };

const Questionnaire = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{ maxWidth: 600 }}
        contentContainerStyle={styles.container}
      >
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
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Questionnaire</Text>
          <Text style={styles.sectionBody}>
            Let’s learn a little about your loved one. Please answer a few
            questions about your loved one below and we will provide you with
            recommendations and guidance based on the support and care they
            need. Our questionaire is based on the healthcare industry standard
            Activities of Daily Living (ADL) checklist.
          </Text>
          <Text style={[styles.expandSection, styles.sectionBody]}>
            Read more aout ADLs here
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>
            Whom are we talking about today?
          </Text>
          <Survey navigation={navigation} />
        </View>

        <View style={styles.line} />
        <View style={styles.sectionContainer}>
          <BottomCards navigation={navigation} />
        </View>
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
export default Questionnaire;
