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

const title = {
  color: "#FF266F",
  padding: "40px",
  fontFamily: "Arial",
  textAlign: "center",
};

const textLink = {
  color: "#0000FF",
  fontFamily: "Arial",
  textDecorationLine: "underline",
};

const listBullet = {
  marginHorizontal: 20,
};
export default AreasOfConcern;
