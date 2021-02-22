import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Header, Linking } from "react-native";
import { theme } from "../utils/theme";
import ReactDOM from 'react-dom';
import Unorderedlist from 'react-native-unordered-list';

const RecommendationScreen = ({ navigation }) => {
  return (
    <View>
      <h1 style={title}>
      Recommendations  
      </h1>
      <Unorderedlist style={listBullet}>
        <Text style={textLink} onPress={() => Linking.openURL('https://www.google.com/search?q=how+to+care+for+your+aging+parents&oq=how+to+care+for+your+aging+parents&aqs=chrome..69i57j46j0j0i22i30l4j0i390.4373j0j7&sourceid=chrome&ie=UTF-8')}>
          How to Care for Your Aging Parents
        </Text>
      </Unorderedlist>
    </View>
  );
};

const title = {
  color: "#FF266F",
  padding: "40px",
  fontFamily: "Arial", 
  textAlign: "center", 
};

const textLink = {
  color: "#0000FF",
  fontFamily: "Arial",
  textDecorationLine: "underline",
};

const listBullet = {
  marginHorizontal: 20,
}
export default RecommendationScreen;
