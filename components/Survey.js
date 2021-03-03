import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../firebase";
import { theme } from "../utils/theme";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const radio_props = [
  { label: "Independent", value: 100 },
  { label: "Some help needed", value: 75 },
  { label: "Dependent on help", value: 50 },
  { label: "Cannot do", value: 25 },
];

const RadioButtons = ({ adl, setCategoryScores, categoryScores }) => {
  return (
    <View>
      <RadioForm
        radio_props={radio_props}
        initial={-1}
        onPress={(value) => {
          setCategoryScores({ ...categoryScores, [adl]: value });
        }}
      />
    </View>
  );
};

const db = firebase.database().ref("users");
const Survey = ({ navigation }) => {
  const [categoryScores, setCategoryScores] = useState({});
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();

  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
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

  async function onGetRecos() {
    const NUMBER_OF_ADLS = 3; // TODO: make this dynamic
    if (Object.keys(categoryScores).length != NUMBER_OF_ADLS) {
      alert("Please fill out the entire survey.");
      return;
    }

    const uid = auth.uid;
    let totalScore = 0;
    for (const category in categoryScores) {
      totalScore += Number(categoryScores[category]);
    }
    totalScore = totalScore / Object.keys(categoryScores).length;
    totalScore = Math.trunc(totalScore);
    const results = {
      [name]: {
        categoryScores: categoryScores,
        totalScore: totalScore,
        age: age,
        sex: sex,
      },
    };

    db.update({
      [uid]: { ...user, seniors: { ...user["seniors"], ...results } },
    });
    navigation.navigate("RecommendationScreen", {
      name: name,
    });
  }

  return (
    <View>
      <FRQ
        setName={setName}
        setSex={setSex}
        setAge={setAge}
        name={name}
        sex={sex}
        age={age}
      />
      <MCQ
        setCategoryScores={setCategoryScores}
        categoryScores={categoryScores}
      />
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={onGetRecos}
      >
        <Text style={[styles.buttonText, styles.primaryButtonText]}>
          Get Recommendations
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MCQ = ({ setCategoryScores, categoryScores }) => {
  const [adls, setAdls] = useState(null);

  useEffect(() => {
    const db = firebase.database().ref("adl");
    const handleData = (snap) => {
      const adlDb = snap.val();
      if (adlDb) {
        setAdls(adlDb);
      }
    };
    db.on("value", handleData, (error) => console.log(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);
  if (adls === null) {
    return (
      <View>
        <Text style={styles.Header}>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      {Object.keys(adls).map((adl) => {
        return (
          <View key={adl}>
            <Text style={styles.sectionHeader}>{adl}</Text>
            <Text style={styles.sectionBody}>{adls[adl]["Question"]}</Text>
            <RadioButtons
              adl={adl}
              setCategoryScores={setCategoryScores}
              categoryScores={categoryScores}
            />
          </View>
        );
      })}
    </View>
  );
};

const FRQ = ({ setName, setSex, setAge, name, sex, age }) => {
  return (
    <View style={styles.container} accessibilityRole="form">
      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder={"Name"}
        style={styles.input}
      />
      <TextInput
        value={sex}
        onChangeText={(sex) => setSex(sex)}
        placeholder={"Sex assigned at birth"}
        style={styles.input}
      />
      <TextInput
        value={age}
        onChangeText={(age) => setAge(Number(age))}
        placeholder={"Age"}
        style={styles.input}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    width: "70%",
    maxWidth: 350,
    minHeight: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
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
  primaryButton: {
    backgroundColor: theme.pink,
    borderColor: theme.pink,
    borderWidth: 2,
  },
  button: {
    flex: 1,
    margin: 16,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    textTransform: "uppercase",
    minHeight: 60,
    minWidth: 60,
  },
  buttonText: {
    fontFamily: theme.textFont2,
    fontSize: 13,
  },
  primaryButtonText: {
    color: "white",
  },
});
export default Survey;
