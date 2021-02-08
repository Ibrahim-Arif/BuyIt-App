import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import ListItemCardDetail from "./ListItemCardDetail";

function ListItemCard({ image, title, description, price, onPress, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <ListItemCardDetail
          title={title}
          description={description}
          price={price}
          onPress={() => console.log("card pressed")}
          style={{
            height: "30%",
            width: "85%",
            bottom: 30,
          }}
        />
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
});
export default ListItemCard;
