import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";

function Heading({ title, titleSize = 24, description, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, { fontSize: titleSize }]}>{title}</Text>
      {description && <View style={styles.dot} />}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    backgroundColor: colors.darkgrey,
    height: 6,
    width: 6,
    borderRadius: 3,
    marginRight: 5,
    marginLeft: 10,
  },
  description: {
    fontSize: 18,
    color: colors.darkgrey,
  },
  title: {
    fontWeight: "bold",
    marginLeft: 15,
  },
});
export default Heading;
