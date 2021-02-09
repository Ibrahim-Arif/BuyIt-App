import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import MyText from "./MyText";

function SingleDetailItem({
  first,
  second,
  SecondComponent,
  color,
  firstStyle,
  secondStyle,
  style,
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <MyText style={[styles.text, firstStyle]}>{first}</MyText>
      {!SecondComponent && (
        <MyText style={[styles.text, { marginTop: 5 }, secondStyle]}>
          {second}
        </MyText>
      )}
      {SecondComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: "capitalize",
  },
});
export default SingleDetailItem;
