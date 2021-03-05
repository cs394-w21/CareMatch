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
import TopOptions from "../components/TopOptions";
import BottomCards from "../components/BottomCards";
import Survey from "../components/Survey";

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
              source={require("../assets/Chevron.png")}
            ></Image>
          }
          leftContent="Back"
          leftAction={() => navigation.goBack()}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Support Questionnaire</Text>
          <Text style={[styles.expandSection, styles.sectionHeader]}>
            Let’s learn a little about your loved one.
          </Text>
          <Text style={styles.sectionBody}>
            Please answer a few questions about your loved one below and we will
            provide you with recommendations and guidance based on the support
            and care they need. Our questionnaire is based on the healthcare
            industry standard Activities of Daily Living (ADL) checklist.
          </Text>
          <Text style={[styles.expandSection, styles.sectionBody]}>
            Read more aout ADLs here
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.line} />
          <Text style={styles.sectionHeader}>
            Whom are we talking about today?
          </Text>
          <Survey navigation={navigation} />
        </View>

        <View style={styles.line} />
        <View style={styles.sectionContainer}>
          <Text style={[styles.expandSection, styles.sectionHeader]}>
            More categories coming soon!
          </Text>
          <Text style={[styles.sectionBody]}>
            Hygiene, managing medications, and walking are the three categories
            we can advise on at this time, but look out for more in the future.
            Immediate next categories include transferring, climbing staris,
            easting, and shopping. Soon, we will host all categories of support
            analysis from the healthcare industry standard Activities of Daily
            Living checklist.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <BottomCards navigation={navigation} name={"your loved one"} />
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
    marginTop: 26,
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
