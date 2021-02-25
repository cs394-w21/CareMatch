import React, { useState, useEffect } from "react";
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
import BottomCards from "../components/BottomCards";
import TopOptions from "../components/TopOptions";
import { firebase } from "../firebase";

const name = "Marv";
const categoryScoreDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vincididunt ut labore et dolore magna aliqua. Ut enim. ";

const CategoryRecommendations = ({ route, navigation }) => {
  const { area, score } = route.params;
  const [adl, setAdl] = useState(null);

  useEffect(() => {
    const db = firebase.database().ref("adl");
    const handleData = (snap) => {
      const adlDb = snap.val();
      if (adlDb) {
        setAdl(adlDb[area]);
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
  const numProducts = adl.products.length;
  const numArticles = adl.articles.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopOptions
        leftIcon={
          <Image
            style={styles.icon}
            source={require("../assets/chevron.png")}
          ></Image>
        }
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
        <Text style={styles.sectionBody}>{adl.blurb}</Text>
        <Text style={[styles.expandSection, styles.sectionBody]}>
          Read More
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subSectionHeader}>For {name}, we recommend...</Text>
        <Text style={styles.sectionBody}>
          {numProducts} product(s) and {numArticles} article(s). {name}'s score
          is also low enough that we think it would be useful to talk with one
          of our registered nurses.
        </Text>
        <Text style={[styles.expandSection, styles.sectionBody]}>
          Contact Nurse
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <ProductsAndServices
          navigation={navigation}
          products={adl.products}
          area={area}
          score={score}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Articles articles={adl.articles} />
      </View>
      <BottomCards navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    flexGrow: 1,
  },
  icon: {
    width: 12,
    height: 21,
    overflow: "visible",
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
export default CategoryRecommendations;
