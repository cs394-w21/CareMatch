import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Header,
  Linking,
  ScrollView,
} from "react-native";
import { theme } from "../utils/theme";

const AreasOfConcern = ({ navigation, areas, name }) => {
  const cardSection = Object.keys(areas).map((area) => {
    let sectionContent;
    if (area == "Hygeine") {
      sectionContent = hygeine(areas[area], name);
    } else if (area == "Managing Medication") {
      sectionContent = managingMedication(areas[area], name);
    }
    return (
      <View key={area}>
        <View style={styles.cardContainer}>
          {circle(areas[area])}
          <View style={styles.textContainer}>
            <Text style={styles.subSectionHeader}>{area}</Text>
            {sectionContent}
            <Text
              style={[styles.expandSection, styles.sectionBody]}
              onPress={() =>
                navigation.navigate("CategoryRecommendations", {
                  area: area,
                  score: areas[area],
                })
              }
            >
              See Recommendations
            </Text>
          </View>
        </View>

        <View style={styles.line} />
      </View>
    );
  });
  return <React.Fragment>{cardSection}</React.Fragment>;
};

const hygeine = (score, name) => {
  return (
    <Text key="Hygeine">
      A Hygeine score of {score} out of 100 means that {name} needs attention
      from a doctor quickly. It also means there are products and services that
      could make an impact.
    </Text>
  );
};

const managingMedication = (score, name) => {
  return (
    <Text key="Managing Medication">
      A Managing Medication score of {score} out of 100 means that {name} needs
      attention from a doctor quickly. It also means there are products and
      services that could make an impact.
    </Text>
  );
};

export const circle = (score) => {
  const [circleColor, textColor] =
    score > 50
      ? [styles.yellowCircle, styles.yellowCircleText]
      : [styles.redCircle, styles.redCircleText];
  return (
    <View style={[styles.circle, circleColor]}>
      <Text style={[styles.text, textColor]}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  expandSection: {
    color: theme.pink,
  },
  text: {
    fontFamily: theme.textFont2,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 16,
  },
  yellowCircle: {
    backgroundColor: "#FFDC26",
  },
  yellowCircleText: {
    color: "black",
  },
  redCircle: {
    backgroundColor: "#FF2626",
  },
  redCircleText: {
    color: "white",
  },
  textContainer: {
    flex: 1,
    marginLeft: 19,
  },
  line: {
    height: 0,
    color: theme.gray,
    borderColor: theme.gray,
    borderWidth: 0.25,
    width: "100%",
  },
  subSectionHeader: {
    fontFamily: theme.textFont,
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
  },
});

export default AreasOfConcern;
