import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../utils/theme";
import { firebase } from "../firebase";

const AreasOfConcern = ({
  navigation,
  areas,
  name,
  saveArticle,
  saveProduct,
  articleState,
  productState,
}) => {
  const [adl, setAdl] = useState(null);

  useEffect(() => {
    const db = firebase.database().ref("adl");
    const handleData = (snap) => {
      const adlDb = snap.val();
      if (adlDb) {
        setAdl(adlDb);
      }
    };
    db.on("value", handleData, (error) => console.log(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);
  if (adl === null) {
    return (
      <View>
        <Text style={styles.Header}>Loading...</Text>
      </View>
    );
  }

  const cardSection = Object.keys(areas).map((area) => {
    let sectionContent;
    if (area == "Hygiene") {
      sectionContent = hygiene(areas[area], name);
    } else if (area == "Managing Medications") {
      sectionContent = managingMedication(areas[area], name);
    }
    let numProducts = adl[area].products.length;
    let numArticles = adl[area].articles.length;
    return (
      <View key={area}>
        <View style={styles.cardContainer}>
          {circle(areas[area])}
          <View style={styles.textContainer}>
            <Text style={styles.subSectionHeader}>{area}</Text>
            <Text style={styles.text}>{sectionContent}</Text>
            <Text style={styles.text}>
              {"\n"}
              {numProducts} product(s) | {numArticles} article(s)
            </Text>
            <Text
              style={[styles.expandSection, styles.sectionBody]}
              onPress={() =>
                navigation.navigate("CategoryRecommendations", {
                  area: area,
                  score: areas[area],
                  name: name,
                  saveArticle: saveArticle,
                  saveProduct: saveProduct,
                  articleState: articleState,
                  productState: productState,
                })
              }
            >
              {"\n"}See Resources ›
            </Text>
          </View>
        </View>

        <View style={styles.line} />
      </View>
    );
  });
  return <View>{cardSection}</View>;
};

const hygiene = (score, name) => {
  return `A Hygiene score of ${score} out of 100 means that ${name} needs attention from a doctor quickly. It also means there are products and services that could make an impact.`;
};

const managingMedication = (score, name) => {
  return `A Managing Medications score of ${score} out of 100 means that ${name} needs attention from a doctor quickly. It also means there are products and services that could make an impact.`;
};

export const circle = (score) => {
  const [circleColor, textColor] =
    score > 50
      ? [styles.yellowCircle, styles.yellowCircleText]
      : score == 50
      ? [styles.orangeCircle, styles.yellowCircleText]
      : [styles.redCircle, styles.redCircleText];
  return (
    <View style={[styles.circle, circleColor]}>
      <Text style={[styles.text, textColor, { fontSize: 18, fontWeight: 700 }]}>
        {score}
      </Text>
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
    fontSize: 15,
    lineHeight: 18,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 16,
  },
  orangeCircle: {
    backgroundColor: "#f57b42",
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
    borderWidth: 0.0001,
    width: "100%",
  },
  subSectionHeader: {
    fontFamily: theme.textFont2,
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "left",
    marginBottom: 3,
  },
});

export default AreasOfConcern;
