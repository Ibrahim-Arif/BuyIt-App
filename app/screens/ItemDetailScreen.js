import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import Heading from "../components/Heading";
import SingleDetailItem from "../components/SingleDetailItem";

import colors from "../config/colors";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

function ItemDetailScreen({
  title = "Superpose",
  image = require("../assets/5.jpg"),
  price = 650,
  description = "Colorful roof lamp designed by Frederik",
}) {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.imageText}>
          <Text style={styles.text}>
            {price}
            <Text style={{ fontSize: 16 }}>{"  USD"}</Text>
          </Text>

          <Text style={{ fontSize: 16, color: colors.white, marginTop: 5 }}>
            Free delievery to your door
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.secondContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.singleItemContainer}>
          <SingleDetailItem
            first="Market"
            second="182"
            secondStyle={{ fontSize: 32 }}
            color={colors.primary}
            style={styles.singleItem}
          />

          <SingleDetailItem
            first="Delivery"
            firstStyle={{ color: colors.darkgrey }}
            SecondComponent={
              <Text style={{ fontSize: 32, color: colors.black }}>
                24
                <Text style={{ fontSize: 16 }}>{" h"}</Text>
              </Text>
            }
            color={colors.lightgrey}
            style={styles.singleItem}
          />

          <SingleDetailItem
            first="Return"
            firstStyle={{ color: colors.darkgrey }}
            SecondComponent={
              <Text style={{ fontSize: 32, color: colors.black }}>
                7<Text style={{ fontSize: 16 }}>{" Days"}</Text>
              </Text>
            }
            color={colors.lightgrey}
            style={styles.singleItem}
          />
        </View>
        <Heading title="Settlement" description="(2,300)" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    color: colors.darkgrey,
    marginTop: 5,
    paddingLeft: 20,
    fontSize: 16,
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.4,
  },
  secondContainer: {
    paddingTop: 20,
    flex: 1,
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.white,
  },
  title: {
    fontSize: 26,
    color: colors.black,
    paddingLeft: 20,
  },
  imageText: {
    top: screenHeight * 0.2,
    left: 15,
    width: screenWidth * 0.4,
  },
  singleItem: {
    width: screenWidth * 0.3,
    height: 120,
  },
  singleItemContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
export default ItemDetailScreen;
