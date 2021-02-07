import React from "react";
import { View } from "react-native";

function Diamond({ color = "tomato", size = 100, style }) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    >
      <View
        style={{
          borderLeftColor: "transparent",
          borderLeftWidth: size / 4,
          borderRightColor: "transparent",
          borderRightWidth: size / 4,
          borderBottomColor: color,
          borderBottomWidth: size / 4,
        }}
      />
      <View
        style={{
          borderTopWidth: 0.5 * size,
          borderTopColor: color,
          borderLeftColor: "transparent",
          borderLeftWidth: size / 2,
          borderRightColor: "transparent",
          borderRightWidth: size / 2,
        }}
      />
    </View>
  );
}

export default Diamond;
