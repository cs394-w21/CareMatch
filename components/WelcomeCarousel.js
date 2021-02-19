import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { theme } from "../utils/theme";
import Swiper from "react-native-web-swiper";
//import juno from '../assets/juno.svg';
//import {Svg} from 'react-native-svg';


const Carousel = ({ setShowButtons }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const onIndexChanged = (index) => {
    console.log(index);
    setCurrIndex(index);
    index === 4 ? setShowButtons(false) : setShowButtons(true);
  };
  return (
    <View style={styles.container}>
      <Swiper
        onIndexChanged={onIndexChanged}
        minDistanceForAction={0.03} // only 3% of distance needed to qualify as a swipe
        controlsProps={{
          nextPos: false, // hide next button
          prevPos: false, // hide back button
          dotsTouchable: true,
          DotComponent: ({ index, isActive, onPress }) => {
            let color = "black";
            if (currIndex === 0) {
              color = "white";
            }
            if (isActive) {
              return (
                <View
                  onPress={onPress}
                  style={{
                    backgroundColor: color,
                    width: 16,
                    height: 16,
                    margin: 4,
                    borderRadius: 16 / 2,
                    overflow: "hidden",
                  }}
                />
              );
            }
            return (
              <View
                onPress={onPress}
                style={{
                  borderWidth: 1,
                  borderColor: color,
                  width: 16,
                  height: 16,
                  margin: 4,
                  borderRadius: 16 / 2,
                  overflow: "hidden",
                }}
              />
            );
          },
        }}
      >
        <View style={[styles.slideContainer]}>
          <ImageBackground
            source={require("../assets/elderly_couple.png")}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View style={[styles.firstSlideContainer]}>
              <View style={{ maxWidth: "75%" }}>
                <Image 
                  style={styles.logo}
                  source={require("../assets/juno.png")}>
                </Image>
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
            <Image
              style={styles.image}
              source={require("../assets/graphic_placeholder.png")}
            ></Image>
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
            <Image
              style={styles.image}
              source={require("../assets/graphic_placeholder.png")}
            ></Image>
            <Text style={[styles.text, styles.primaryText]}>
              Understand recommended products and services based on your loved
              one’s support rating and specific care type needs.
            </Text>
          </View>
        </View>
        <View style={[styles.slideContainer]}>
          <View style={styles.textContainer}>
            <Image
              style={styles.image}
              source={require("../assets/graphic_placeholder.png")}
            ></Image>
            <Text style={[styles.text, styles.primaryText]}>
              Review articles and information that will help you know what aging
              looks like for all of us, how it relates to you and your family,
              and how to start the conversation.
            </Text>
          </View>
        </View>
        <View style={[styles.slideContainer]}>
          <View style={styles.textContainer}>
            <Image
              style={styles.image}
              source={require("../assets/graphic_placeholder.png")}
            ></Image>
            <Text style={[styles.text, styles.primaryText]}>
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
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
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
  logo: {
    marginBottom: 40,
    overflow: "visible",
    width: 112,
    height: 49,
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 75,
  },
  text: {
    fontSize: theme.textFontSize,
    //fontWeight: "bold",
    fontFamily: "Helvetica Neue",
    textAlign: "center",
    textAlignVertical: "top"
  },
  primaryText: {
    color: "black",
  },
  secondaryText: {
    color: "white",
  },
});
