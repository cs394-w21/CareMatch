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
import Logo from "../components/Logo";
import { firebase } from "../firebase";

const Home = ({ navigation }) => {
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
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <ScrollView
        style={{ maxWidth: 600 }}
        contentContainerStyle={styles.container}
      >
        <View>
          <Text style={styles.sectionHeader}>Profiles</Text>
        </View>
        {Object.keys(user["seniors"]).map((name) => {
          return (
            <View key={name}>
              <Text>{name}</Text>
              <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() =>
                  navigation.navigate("RecommendationScreen", { name: name })
                }
              >
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                  Go to {name}'s Full Support Profile
                </Text>
              </TouchableOpacity>
              <Text>
                Here are your saved article, product, and service
                recommendations.
              </Text>
            </View>
          );
        })}
        <Logo />
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
  buttonText: {
    fontFamily: theme.textFont2,
    fontSize: 13,
  },
  secondaryButtonText: {
    color: "black",
  },
  secondaryButton: {
    backgroundColor: "rgba(255, 146, 183, 0.34)",
    borderColor: "rgba(255, 146, 183, 0.34)",
    borderWidth: 2,
  },
  button: {
    flex: 1,
    margin: 16,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    minHeight: 36,
    minWidth: 60,
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
export default Home;
