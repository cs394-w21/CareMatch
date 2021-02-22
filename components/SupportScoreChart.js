import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
/**
 * Override styles that get passed from props
 **/
const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

const renderThirdLayer = (percent) => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View
        style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]}
      ></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const SupportScoreChart = ({ percent }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      <Text style={styles.display}>{percent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    position: "absolute",
    fontSize: 60,
    fontWeight: "bold",
    color: theme.pink,
  },
  container: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    borderColor: theme.lightPink,
    justifyContent: "center",
    alignItems: "center",
  },
  firstProgressLayer: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: theme.pink,
    borderTopColor: theme.pink,
    transform: [{ rotateZ: "-135deg" }],
  },
  secondProgressLayer: {
    width: 200,
    height: 200,
    position: "absolute",
    borderWidth: 20,
    borderRadius: 100,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: theme.pink,
    borderTopColor: theme.pink,
    transform: [{ rotateZ: "45deg" }],
  },
  offsetLayer: {
    width: 200,
    height: 200,
    position: "absolute",
    borderWidth: 20,
    borderRadius: 100,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: theme.lightPink,
    borderTopColor: theme.lightPink,
    transform: [{ rotateZ: "-135deg" }],
  },
});

export default SupportScoreChart;
