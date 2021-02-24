import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require("../assets/juno_black.png")}
    ></Image>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginBottom: 40,
    overflow: "visible",
    width: 112,
    height: 49,
    alignSelf: "center",
  },
});
export default Logo;
