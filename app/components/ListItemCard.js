import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";
import ListItem from "./ListItem";

function ListItemCard({ image, title, description, price, onPress, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        <View style={styles.detail}>
          <ListItem
            title={title}
            description={description}
            style={{ padding: 0 }}
          />
          <Text style={styles.price}>
            {price}
            <Text style={{ fontSize: 16 }}>{"  USD"}</Text>
          </Text>
          <Icon
            backgroundColor={colors.primary}
            name="arrow-right"
            color={colors.white}
            style={styles.icon}
            onPress={() => console.log("arrow clicked")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.5,
  },
  image: {
    borderRadius: 30,
    height: "75%",
    width: "100%",
  },
  detail: {
    borderRadius: 30,
    backgroundColor: colors.white,
    width: "90%",
    height: "30%",
    top: "-10%",
    elevation: 7,
    padding: 10,
  },
  price: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
  },
  icon: {
    borderRadius: 13,
    alignSelf: "flex-end",
    bottom: 50,
    left: 20,
  },
});
export default ListItemCard;
