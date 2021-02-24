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

const Articles = ({ area }) => {
  const articles = {
    0: {
      title: "Article Title Goes Here",
      previewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vincididunt ut labore.",
    },
    1: {
      title: "Article Title Goes Here",
      previewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vincididunt ut labore.",
    },
  };
  const cards = Object.keys(articles).map((i) => {
    const item = articles[i];
    return (
      <View style={styles.sectionContainer} key={i}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={[styles.sectionBody, { marginBottom: 13 }]}>
          {item.previewText}
        </Text>
        <Text
          style={[styles.expandSection, styles.sectionBody]}
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/search?q=how+to+care+for+your+aging+parents&oq=how+to+care+for+your+aging+parents&aqs=chrome..69i57j46j0j0i22i30l4j0i390.4373j0j7&sourceid=chrome&ie=UTF-8"
            )
          }
        >
          Go to Article
        </Text>
      </View>
    );
  });
  return (
    <View>
      <Text style={styles.sectionHeader}>Recommended Articles</Text>
      <View style={styles.line} />
      {cards}
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
  sectionContainer: {
    flex: 1,
    alignItems: "flex-start",
    width: "95%",
    marginTop: 26,
    marginBottom: 0,
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
  sectionHeader: {
    fontFamily: theme.textFont,
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "left",
  },
  articleTitle: {
    fontFamily: theme.textFont,
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "left",
  },
  subSectionHeader: {
    fontFamily: theme.textFont2,
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
  },
});

export default Articles;
