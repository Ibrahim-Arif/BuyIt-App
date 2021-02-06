import React from "react";
import { View, StyleSheet } from "react-native";

function Seperator({ style }) {
  return <View style={[styles.container, style]} />;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    backgroundColor: "#E7E9E9",
    height: 1,
    width: "80%",
  },
});

export default Seperator;
