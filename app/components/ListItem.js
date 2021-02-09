import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

function ListItem({
  title,
  titleStyle,
  description,
  descriptionStyle,
  image = null,
  imageSize = 50,
  imageStyle,
  IconComponent,
  RightComponent,
  renderRightActions,
  onPress = null,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        onPress={onPress}
        underlayColor={colors.lightgrey}
        activeOpacity={0.5}
      >
        <View style={[styles.container, style]}>
          {image && (
            <Image
              style={[
                {
                  height: imageSize,
                  width: imageSize,
                  borderRadius: imageSize / 2,
                },
                imageStyle,
              ]}
              source={image}
            />
          )}
          {IconComponent}

          <View style={styles.containerText}>
            <Text
              numberOfLines={1}
              style={[styles.text, titleStyle, { textTransform: "capitalize" }]}
            >
              {title}
            </Text>

            {description && (
              <Text
                numberOfLines={1}
                style={[
                  styles.text,
                  { color: colors.darkgrey, fontSize: 16, marginTop: 3 },
                  descriptionStyle,
                ]}
              >
                {description}
              </Text>
            )}
          </View>
          {RightComponent}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  containerText: {
    marginLeft: 14,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListItem;
