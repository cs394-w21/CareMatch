import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { theme } from "../utils/theme";
import Swiper from "react-native-web-swiper";

const Carousel = ({ setShowButtons }) => {
  const onIndexChanged = (index) => {
    console.log(index);
    index === 4 ? setShowButtons(false) : setShowButtons(true);
  };
  return (
    <View style={styles.container}>
      <Swiper
        onIndexChanged={onIndexChanged}
        controlsProps={{
          nextPos: false,
          prevPos: false,
          dotsTouchable: true,
        }}
      >
        <View style={[styles.slideContainer]}>
          <ImageBackground
            source={require("../assets/elderly_couple.png")}
            style={styles.image}
            resizeMode="cover"
          >
            <View style={[styles.firstSlideContainer]}>
              <View style={{ maxWidth: "75%" }}>
                <Text style={styles.title}>CareMatch</Text>
                <Text style={[styles.text, styles.secondaryText]}>
                  Everyone gets older, but when a family member of your own
                  needs more support as they age, it can be difficult to engage.
                  {"\n\n"}That’s where we can help.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.slideContainer]}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.primaryText]}>
              Assess how much support your loved one may need by utilizing the
              ADL (Activities of Daily Living) checklist, a healthcare industry
              standard. Then, receive our simple to understand support rating,
              which helps you know how much support to seek.
            </Text>
          </View>
        </View>
        <View style={[styles.slideContainer]}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.primaryText]}>
              Understand recommended products and services based on your loved
              one’s support rating and specific care type needs.
            </Text>
          </View>
        </View>
        <View style={[styles.slideContainer]}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.primaryText]}>
              Review articles and information that will help you know what aging
              looks like for all of us, how it relates to you and your family,
              and how to start the conversation.
            </Text>
          </View>
        </View>
        <View style={[styles.slideContainer]}>
          <View style={styles.textContainer}>
            <Text style={[(styles.text, styles.primaryText)]}>
              To get started let’s take 10 minutes to learn about the person, or
              people, you’d like to help. We’ll let you know the information we
              need before you begin and if you can’t get it all done in one
              sitting, you can create a profile to save and finish later.
            </Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  firstSlideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "90%",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.38)",
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "90%",
  },
  title: {
    fontSize: 60,
    textAlign: "center",
    color: "white",
    marginBottom: 40,
  },
  textContainer: {
    padding: 75,
  },
  text: {
    fontSize: theme.textFontSize,
    //fontWeight: "bold",
    fontFamily: theme.textFont,
    textAlign: "center",
  },
  primaryText: {
    color: "black",
  },
  secondaryText: {
    color: "white",
  },
});
