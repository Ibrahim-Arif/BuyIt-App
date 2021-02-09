import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import ListItem from "./ListItem";
import MyText from "./MyText";

const handleRating = (total) => {
  const ratingIcons = [];
  for (let i = 1; i <= 5; i++)
    ratingIcons.push(
      <AntDesign
        name="star"
        size={16}
        color={i <= total ? colors.primary : colors.darkgrey}
        key={i}
      />
    );
  return ratingIcons;
};

function RatingCard({ title, image, rating, comment, style }) {
  return (
    <View style={[styles.container, style]}>
      <ListItem
        title={title}
        image={image}
        imageSize={35}
        RightComponent={handleRating(rating)}
      />
      <MyText style={styles.text}>{comment}</MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.8,
    alignSelf: "center",
    backgroundColor: colors.lightgrey,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 5,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
  },
});
export default RatingCard;
