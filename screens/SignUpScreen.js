import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../firebase";
import { theme } from "../utils/theme";

const db = firebase.database().ref("users");

const newUser = {
  firstName: "",
  lastName: "",
};

const SignUpScreen = ({ navigation }) => {
  const [info, setInfo] = useState(newUser);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  async function onSignUp() {
    setSignupError("");
    if (email == "") {
      setSignupError("Please provide an email address.");
      return;
    }
    if (password != confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }
    var errorCode = "success";

    const signUpAction = (email, userCredential, errorCode) => {
      if (errorCode != "success") return;
      const user = userCredential.user.uid;
      db.update({
        [user]: {
          email: email,
        },
      });
      db.update({
        [user]: { ...newUser, firstName: firstName, lastName: lastName },
      });
      navigation.navigate("RecommendationScreen");
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        errorCode = err.code;
        setSignupError(err.message);
      })
      .then((userCredential) => {
        signUpAction(email, userCredential, errorCode);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, marginBottom: 15 }}>Juno</Text>
      <TextInput
        value={firstName}
        onChangeText={(name) => setFirstName(name)}
        placeholder={"First Name"}
        style={styles.input}
      />
      <TextInput
        value={lastName}
        onChangeText={(name) => setLastName(name)}
        placeholder={"Last Name"}
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder={"Email"}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        placeholder={"Confirm Password"}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity onPress={onSignUp} style={styles.signupButton}>
        <Text>SIGN UP</Text>
      </TouchableOpacity>
      <Text>{signupError}</Text>
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
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  signupButton: {
    padding: 10,
    backgroundColor: theme.pink,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default SignUpScreen;
