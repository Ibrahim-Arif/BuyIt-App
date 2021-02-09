import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import ArrowIcon from "./ArrowIcon";

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
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text}>{title}</Text>
          <Text
            style={[
              styles.text,
              { color: colors.darkgrey, marginTop: 3, fontSize: 16 },
            ]}
          >
            {description}
          </Text>
        </View>
        <View style={styles.priceIconContainer}>
          <Text style={styles.price}>
            {price}
            <Text style={{ fontSize: 16 }}>{"  USD"}</Text>
          </Text>
          <ArrowIcon direction="right" style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.white,
    width: "95%",
    elevation: 5,
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
    bottom: 20,
    left: 20,
  },
  priceIconContainer: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    borderRadius: 35,
    height: 120,
    width: 120,
  },
});
export default ListItemCardDetail;
