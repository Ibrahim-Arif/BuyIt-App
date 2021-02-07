import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import SingleDetailItem from "./SingleDetailItem";

function ProfileCard({ data, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
      </View>

      <ListItem
        title={data.title}
        titleStyle={{ color: colors.white, fontSize: 26 }}
        description={data.description}
        descriptionStyle={{ color: colors.lightgrey }}
        image={data.image}
        imageSize={60}
        imageStyle={{ borderColor: colors.white, borderWidth: 1 }}
        RightComponent={
          <TouchableOpacity>
            <AntDesign
              name="edit"
              size={24}
              color={colors.white}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        }
      />

      <View style={styles.detailsContainer}>
        <SingleDetailItem
          first={data.collect}
          second="collect"
          firstStyle={{ fontSize: 28 }}
        />
        <SingleDetailItem
          first={data.attention}
          second="attention"
          firstStyle={{ fontSize: 28 }}
        />
        <SingleDetailItem
          first={data.track}
          second="track"
          firstStyle={{ fontSize: 28 }}
        />
        <SingleDetailItem
          first={data.coupon}
          second="coupons"
          firstStyle={{ fontSize: 28 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingBottom: 20,
    overflow: "hidden",
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.light,
    top: -40,
    left: -30,
  },
  circleContainer: {
    width: 50,
    height: 10,
    alignSelf: "flex-end",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  editIcon: {
    marginRight: "15%",
    marginBottom: 15,
  },
});
export default ProfileCard;
