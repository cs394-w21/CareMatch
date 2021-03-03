import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { firebase } from "../firebase";
import { theme } from "../utils/theme";
import Logo from "../components/Logo";

const db = firebase.database().ref("users");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  async function onLogin() {
    var errorCode = "success";
    const loginAction = () => {
      if (errorCode != "success") return;
      let curId = firebase.auth().currentUser.uid;
      db.child(curId).once("value", (snapshot) => {
        navigation.navigate("Home");
      });
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        errorCode = error.code;
        setLoginError(error.message);
      })
      .then(loginAction);
  }
  return (
    <View style={styles.container} accessibilityRole="form">
      <Logo />
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
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          title={"Login"}
          style={styles.loginButton}
          onPress={onLogin}
        >
          <Text style={{ color: "white" }}>LOG IN</Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
          style={styles.signupButton}
        >
          <Text>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <Text>{loginError}</Text>
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
  loginButton: {
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: theme.pink,
    borderRadius: 10,
  },
  signupButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default LoginScreen;
