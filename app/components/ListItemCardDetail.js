import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import ListItem from "./ListItem";
import Icon from "./Icon";
import colors from "../config/colors";

function ListItemCardDetail({
  title,
  description,
  price,
  onPress,
  image,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.5}
    >
      {image && (
        <Image source={image} style={styles.image} resizeMode="cover" />
      )}

      <View style={styles.detail}>
        <ListItem
          title={title}
          description={description}
          style={{ padding: 0 }}
        />
        <View style={styles.priceIconContainer}>
          <Text style={styles.price}>
            {price}
            <Text style={{ fontSize: 16 }}>{"  USD"}</Text>
          </Text>
          <Icon
            backgroundColor={colors.primary}
            name="arrow-right"
            color={colors.white}
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    borderRadius: 30,
    backgroundColor: colors.white,
    width: "95%",
    elevation: 7,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    flex: 1,
    justifyContent: "space-around",
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
  },
  icon: {
    borderRadius: 13,
    bottom: 20,
    left: 10,
  },
  priceIconContainer: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  image: {
    borderRadius: 35,
    height: 120,
    width: 120,
  },
});
export default ListItemCardDetail;
