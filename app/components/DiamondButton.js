import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Diamond from "./Diamond";
import colors from "../config/colors";

const iconProps = {
  selected: {
    backgroundColor: colors.primary,
    size: 60,
    iconSize: 60 * 0.7,
    diamondColor: colors.light,
    iconColor: colors.white,
  },
  disselected: {
    backgroundColor: colors.lightgrey,
    size: 50,
    iconSize: 50 * 0.7,
    diamondColor: "#BFCBD9",
    iconColor: "#969baa",
  },
};

function DiamondButton({
  iconName,
  onPress,
  insideDiamond = false,
  isActive = false,
  style,
}) {
  props = isActive ? iconProps.selected : iconProps.disselected;

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
          !insideDiamond && { justifyContent: "center" },
          style,
        ]}
      >
        {insideDiamond && (
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
            bottom: insideDiamond ? props.iconSize * 0.7 : 0,
            transform: [{ rotate: "45deg" }],
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DiamondButton;
