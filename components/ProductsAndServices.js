import React, { useState } from "react";
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
import { Rating, AirbnbRating } from "react-native-ratings";
import { ThemeProvider } from "@react-navigation/native";

const ProductBadge = () => {
  return (
    <View style={{ backgroundColor: theme.pink, borderRadius: 9 }}>
      <Text
        style={{
          fontFamily: theme.textFont2,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: 22,
          textAlign: "center",
          color: "white",
          margin: 2,
        }}
      >
        {" "}
        Product{" "}
      </Text>
    </View>
  );
};

const ProductsAndServices = ({ area }) => {
  const productsAndServices = {
    0: {
      name: "[Product Name]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Mpor incididunt.",
      stars: 4,
      images: [],
    },
    1: {
      name: "[Product Name]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Mpor incididunt.",
      stars: 5,
      images: [],
    },
  };
  const cards = Object.keys(productsAndServices).map((i) => {
    const item = productsAndServices[i];
    return (
      <View style={styles.sectionContainer} key={i}>
        <ProductBadge />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "left",
          }}
        >
          <Text style={styles.productTitle}>{item.name}</Text>
          <Rating
            style={{ paddingVertical: 10 }}
            startingValue={item.stars}
            readonly={true}
            imageSize={11}
          />
        </View>
        <Text style={styles.sectionBody}>{item.description}</Text>
        <Text
          style={[styles.expandSection, styles.sectionBody, { marginTop: 15 }]}
        >
          Read More
        </Text>
      </View>
    );
  });
  return (
    <View>
      <Text style={styles.sectionHeader}>
        Recommended Products {"&"} Services
      </Text>
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
  expandSection: {
    color: theme.pink,
  },
  text: {
    fontFamily: theme.textFont2,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
  },
  sectionContainer: {
    flex: 1,
    alignItems: "flex-start",
    width: "95%",
    marginTop: 26,
    marginBottom: 0,
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
  subSectionHeader: {
    fontFamily: theme.textFont,
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
  },
  productTitle: {
    fontFamily: theme.textFont2,
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "left",
    color: theme.pink,
  },
});

export default ProductsAndServices;
