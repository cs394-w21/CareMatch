import React from "react";
import { View } from "react-native";
import NurseContact from "./NurseContact";
import Logo from "./Logo";
import RegisterCard from "./RegisterCard";

const BottomCards = ({ navigation, name }) => {
  return (
    <View style={{ width: "100%" }}>
      <NurseContact />
      <RegisterCard navigation={navigation} name={name} />
      <Logo />
    </View>
  );
};

export default BottomCards;
