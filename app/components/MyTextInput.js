import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import Icon from "./Icon";
import colors from "../config/colors";

function MyTextInput({
  iconName,
  iconColor = "#918C8C",
  onPress,
  style = null,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.textInput} {...otherProps} />
      <Icon
        name="send"
        color={colors.white}
        backgroundColor={colors.primary}
        iconSize={24}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#E7E9E9",
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    padding: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default MyTextInput;
