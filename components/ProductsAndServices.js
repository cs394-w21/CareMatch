import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { theme } from "../utils/theme";

export const ProductBadge = () => {
  return (
    <View
      style={{
        backgroundColor: theme.pink,
        borderRadius: 9,
        marginBottom: 16,
        height: 23,
        width: 49,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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

const ProductsAndServices = ({
  navigation,
  products,
  area,
  score,
  name,
  saveProduct,
}) => {
  const cards = products.map((item, i) => {
    const goToProduct = () => {
      navigation.navigate("SingleProductScreen", {
        area: area,
        item: item,
        score: score,
        saveProduct: saveProduct,
        name: name,
      });
    };
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
          <Text style={styles.productTitle} onPress={goToProduct}>
            {item.title}
          </Text>
        </View>
        <Text style={styles.sectionBody}>{item.blurb}</Text>
        {item.image ? (
          <Image style={styles.image} source={{ uri: item.image }}></Image>
        ) : null}

        <Text
          style={[styles.expandSection, styles.sectionBody, { marginTop: 15 }]}
          onPress={goToProduct}
        >
          Read More ›
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
  image: {
    width: 65,
    height: 65,
    marginTop: 16,
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
    borderWidth: 0.125,
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
    fontSize: 15,
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
