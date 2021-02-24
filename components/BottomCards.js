import React from "react";
import { View } from "react-native";
import NurseContact from "./NurseContact";
import Logo from "./Logo";

const BottomCards = () => {
  return (
    <View style={{ width: "100%" }}>
      <NurseContact />
      <Logo />
    </View>
  );
};

export default BottomCards;
