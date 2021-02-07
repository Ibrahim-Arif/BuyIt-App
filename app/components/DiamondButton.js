import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Diamond from "./Diamond";

function DiamondButton({
  iconName,
  onPress,
  diamond = true,
  props = {
    size: 60,
    backgroundColor: "#3A77FE",
    diamondColor: "#588EFF",
    iconColor: "#fff",
    iconSize: null,
  },
  style,
}) {
  props.iconSize = props.size * 0.6;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            width: props.size,
            height: props.size,
            backgroundColor: props.backgroundColor,
            alignItems: "center",
            alignSelf: "center",
            transform: [{ rotate: "-45deg" }],
            borderRadius: 0.33 * props.size,
            margin: 15,
          },
          !diamond && { justifyContent: "center" },
          style,
        ]}
      >
        {diamond && (
          <Diamond
            size={0.6 * props.size}
            style={{ top: props.size / 2.7 }}
            color={props.diamondColor}
          />
        )}
        <MaterialCommunityIcons
          name={iconName}
          size={props.iconSize}
          color={props.iconColor}
          style={{
            bottom: diamond ? props.iconSize * 0.7 : 0,
            transform: [{ rotate: "45deg" }],
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DiamondButton;
