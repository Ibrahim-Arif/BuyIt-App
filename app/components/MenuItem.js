import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import MyText from "./MyText";

function MenuItem({ title, onPress, visible }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {visible && <View style={styles.dot} />}
      <MyText style={styles.text}>{title}</MyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    backgroundColor: colors.yellow,
    height: 6,
    width: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 16,
    color: "#fff",
  },
});
export default MenuItem;
