import React, { useState, useEffect } from "react";
import {firebase} from "../firebase";
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

const Articles = ({ articles, saveArticle }) => {
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


  const cards = articles.map((item, i) => {
    let saved = false;
    if (user["articles"]) {
      console.log(item.title)
      console.log(Object.keys(user.articles))
      if (item.title in Object.keys(user.articles)) {
        saved = true;
        console.log("it worked")
      }
    }
    return (
      <View style={styles.sectionContainer} key={i}>
        <View style={styles.moveright}>
         <TouchableOpacity
            onPress={() => saveArticle(item)}
          >
            { saved? <Text style={[styles.sectionBody, styles.expandSection, styles.moveright]}>
            Saved
          </Text> : <Text style={[styles.sectionBody, styles.expandSection, styles.moveright]}>
              Save
            </Text>}
            
          </TouchableOpacity>
          </View>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={[styles.sectionBody, { marginBottom: 13 }]}>
          {item.blurb}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
         
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}
            style={styles.button}
          >
            <Text style={[styles.expandSection, styles.sectionBody]}>
              Go to Article Website ›
            </Text>
          </TouchableOpacity>
        </View>
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
  moveright: {
    width: "100%",
    textAlign: 'right',
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
    fontSize: 15,
    lineHeight: 18,
    textAlign: "left",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    minHeight: 36,
    width: "35%",
  },
  secondaryButton: {
    backgroundColor: theme.green,
    borderColor: "rgba(255, 146, 183, 0.34)",
    borderWidth: 2,
  },
  buttonText: {
    color: theme.pink,
  },
  sectionBody: {
    margin: 5,
  },
});

export default Articles;
