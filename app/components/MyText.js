import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

function MyText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    fontSize: 18,
    color: "#000",
  },
});
export default MyText;
