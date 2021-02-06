import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import MyText from "./MyText";

function SingleDetailItem({
  first,
  second,
  color = null,
  firstStyle,
  secondStyle,
  style,
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <MyText style={[styles.text, firstStyle]}>{first}</MyText>
      <MyText style={[styles.text, { marginTop: 5 }, secondStyle]}>
        {second}
      </MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: "capitalize",
  },
});
export default SingleDetailItem;
