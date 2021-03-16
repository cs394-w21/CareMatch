import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const Logo = ({ navigation }) => {
  // don't pass Logo navigation if you don't want it to navigate you home
  return (
    <TouchableOpacity
      onPress={() => {
        if (navigation) {
          navigation.navigate("Home");
        }
      }}
    >
      <Image
        style={styles.logo}
        source={require("../assets/juno_black.png")}
        onPress={() => navigation.navigate("Home")}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginBottom: 40,
    resizeMode: "contain",
    overflow: "visible",
    width: 120,
    height: 49,
    alignSelf: "center",
  },
});
export default Logo;
