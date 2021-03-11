import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { theme } from "../utils/theme";
import Logo from "../components/Logo";
import { firebase } from "../firebase";
import Articles from "../components/Articles";
import ProductsAndServices from "../components/ProductsAndServices";
import TopOptions from "../components/TopOptions";

const SavedContent = ({ route, navigation }) => {
  const { user } = route.params;
  console.log(user);
  const displayArticles = () => {
    if (!user.hasOwnProperty("articles")) {
      console.log("why");
      return <Text style={{ marginVertical: 16 }}>No articles to display</Text>;
    } else {
      console.log("help");
      return (
        <Articles
          articles={Object.keys(user.articles).map((key) => user.articles[key])}
          saveArticle={() => console.log("correct")}
        />
      );
    }
  };

  const displayProducts = () => {
    if (!user.hasOwnProperty("products")) {
      return <Text style={{ marginVertical: 16 }}>No products to display</Text>;
    } else {
      return (
        <ProductsAndServices
          navigation={navigation}
          products={Object.keys(user.products).map((key) => user.products[key])}
          saveProduct={() => console.log("correct")}
          area={"Home"}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      <TopOptions
        leftIcon={
          <Image
            style={styles.icon}
            source={require("../assets/Chevron.png")}
          ></Image>
        }
        leftContent="Back"
        leftAction={() => navigation.goBack()}
      />
      <View style={styles.cardContainer}>
        {displayArticles()}
        {displayProducts()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 26,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  icon: {
    width: 12,
    height: 21,
    overflow: "visible",
  },
});

export default SavedContent;
