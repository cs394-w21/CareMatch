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

const AreasOfConcern = ({ areas, name }) => {
  let display = [];
  Object.keys(areas).forEach((area) => {
    if (area == "Hygeine") {
      display.push(hygeine(areas[area], name));
    } else if (area == "Managing Medication") {
      display.push(managingMedication(areas[area], name));
    }
  });

  return <React.Fragment>{display}</React.Fragment>;
};

const hygeine = (score, name) => {
  return (
    <React.Fragment>
      {circle(score)}
      <Text key="Hygeine">
      A Hygeine score of {score} out of 100 means that {name} needs attention
      from a doctor quickly. It also means there are products and services that
      could make an impact.
    </Text>
    </React.Fragment>
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

const circle = (score) => {
  const [circleColor, textColor] = score > 50 ? [styles.yellowCircle, styles.yellowCircleText] : [styles.redCircle, styles.redCircleText]
  return (
    <View style={[styles.circle, circleColor]}>
      <Text style={[styles.text, textColor]}>
        {score}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  circle: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.textFont2,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
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
    color: "white"
  }
})

export default AreasOfConcern;
