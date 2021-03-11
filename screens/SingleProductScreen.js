import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Header,
  Linking,
  ScrollView,
  Image,
} from "react-native";
import { theme } from "../utils/theme";
import { ProductBadge } from "../components/ProductsAndServices";
import BottomCards from "../components/BottomCards";
import TopOptions from "../components/TopOptions";
import { Rating } from "react-native-ratings";

const SingleProductScreen = ({ route, navigation }) => {
  const { area, item, score, name, saveProduct } = route.params;

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{ maxWidth: 600 }}
        contentContainerStyle={styles.container}
      >
        <TopOptions
          leftIcon={
            <Image
              style={styles.icon}
              source={require("../assets/Chevron.png")}
            ></Image>
          }
          leftContent={area !== "Home" ? area + " Recommendations" : "Home"}
          leftAction={() => {
            if (area !== "Home") {
              navigation.navigate("CategoryRecommendations", {
                area: area,
                score: score,
              });
            } else {
              navigation.navigate("Home");
            }
          }}
          rightContent={"Save for " + name}
          rightAction={() => saveProduct(item)}
        />
        <View style={styles.sectionContainer}>
          <ProductBadge />
          <Text style={styles.productTitle}>{item.title}</Text>
          <Rating
            style={{ paddingVertical: 10 }}
            startingValue={5}
            readonly={true}
            imageSize={11}
          />
          <Text style={styles.sectionBody}>{item.blurb}</Text>
          {item.image ? (
            <Image
              style={styles.image}
              source={{ uri: item.image }}
              resizeMethod="contain"
            ></Image>
          ) : null}
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => Linking.openURL(item.url)}
          >
            <Text style={[styles.buttonText, styles.primaryButtonText]}>
              Go to Product Website
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <BottomCards navigation={navigation} name={name} />
        </View>
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
    flexGrow: 1,
  },
  image: {
    width: 312,
    height: 312,
    paddingTop: 16,
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
    //lineHeight: 22,
    textAlign: "left",
  },
  subSectionHeader: {
    fontFamily: theme.textFont,
    fontWeight: "bold",
    fontSize: 15,
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
    fontSize: 15,
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
    borderWidth: 0.125,
    width: "100%",
  },
  productTitle: {
    fontFamily: theme.textFont2,
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "left",
    color: theme.pink,
  },

  buttonText: {
    fontFamily: theme.textFont2,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "900",
  },
  primaryButtonText: {
    color: "white",
  },
  primaryButton: {
    backgroundColor: theme.pink,
    borderColor: theme.pink,
    borderWidth: 2,
  },
  button: {
    flex: 1,
    marginVertical: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    textTransform: "uppercase",
    minHeight: 60,
    minWidth: 60,
    maxWidth: 312,
    width: "100%",
  },
});
export default SingleProductScreen;
