import React, { useState, useEffect } from "react";
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
import { firebase } from "../firebase";

const RecommendationScreen = ({ route, navigation }) => {
  const { name } = route.params;
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
    const db = firebase.database().ref("users");
    const handleData = (snap) => {
      const users = snap.val();
      if (users && auth) {
        setUser(users[auth.uid]);
      }
    };
    db.on("value", handleData, (error) => console.log(error));
    return () => {
      db.off("value", handleData);
    };
  }, [auth]);
  if (user == null) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  const categoryScores = user["seniors"][name]["categoryScores"];
  const supportScore = user["seniors"][name]["totalScore"];
  const areas = Object.fromEntries(
    Object.entries(categoryScores).filter(([k, v]) => v < 100)
  );
  const goodAreas = Object.fromEntries(
    Object.entries(categoryScores).filter(([k, v]) => v == 100)
  );
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
          leftContent="Home"
          leftAction={() => navigation.navigate("Home")}
          rightContent="Save Results"
        />
        <SupportScoreChart percent={supportScore} />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>
            Support Score of {supportScore}
          </Text>
          <Text style={styles.sectionBody}>
            Based on the analysis, a support score of {supportScore} means that{" "}
            {name} needs support and care. We recommend getting professional
            advice and consulting with a doctor.{" "}
          </Text>

          {Object.keys(areas).length > 0 ? (
            <Text style={styles.sectionBody}>
              The area(s) where {name} needs the most support is/are:{" "}
              {Object.keys(areas).join(", ")}
            </Text>
          ) : null}

          <Text style={[styles.expandSection, styles.sectionBody]}>
            Read More
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Areas of Concern</Text>
          <View style={styles.line} />
          <AreasOfConcern navigation={navigation} areas={areas} name={name} />
        </View>
        {Object.keys(goodAreas).length > 0 ? (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>
              Read about other support categories
            </Text>

            <Text style={[styles.sectionBody]}>
              {name} scored well in our other support categories, but if you
              like, you can read more about: {Object.keys(goodAreas).join(", ")}
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
        ) : (
          <View />
        )}

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
export default RecommendationScreen;
