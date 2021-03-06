import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
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
  const { name, uid } = route.params; //because we have a guest account
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
      if (users && uid) {
        setUser(users[uid]);
      } else if (users && auth) {
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

  if (user["seniors"] == null) {
    return null;
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
              source={require("../assets/Chevron.png")}
            ></Image>
          }
          leftContent="Home"
          leftAction={() => {
            navigation.navigate("Home", { uid: uid });
          }}
        />

        <View style={[styles.sectionContainer, { marginBottom: 35 }]}>
          <Text
            style={[styles.sectionHeader, { fontWeight: 400, fontSize: 30 }]}
          >
            {name}'s Support Recommendations
          </Text>
        </View>

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
        </View>
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionHeader, { marginBottom: 3 }]}>
            Areas of Concern
          </Text>
          <View style={styles.line} />
          <AreasOfConcern navigation={navigation} areas={areas} name={name} />
        </View>
        {Object.keys(goodAreas).length > 0 ? (
          <View style={styles.sectionContainer}>
            <Text style={[styles.sectionHeader, { fontSize: 13 }]}>
              Other support categories
            </Text>

            <Text style={[styles.sectionBody, { paddingBottom: 16 }]}>
              {name} scored well in our other support categories:{" "}
              {Object.keys(goodAreas).join(", ")}
            </Text>
            <View style={styles.line} />
          </View>
        ) : (
          <View />
        )}

        <View style={styles.sectionContainer}>
          <BottomCards navigation={navigation} name={name} />
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
    //lineHeight: 22,
    textAlign: "left",
  },
  header: {
    fontFamily: theme.textFont,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
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
    fontSize: 15,
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
    borderWidth: 0.125,
    width: "100%",
  },
  icon: {
    width: 12,
    height: 21,
    overflow: "visible",
  },
});
export default RecommendationScreen;
