import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

import Icon from "../components/Icon";
import MyText from "../components/MyText";
import ProfileCard from "../components/ProfileCard";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const iconList = [
  {
    name: "wallet-outline",
    text: "wallet",
  },
  {
    name: "truck-outline",
    text: "delivery",
  },
  {
    name: "message-processing-outline",
    text: "message",
  },
  {
    name: "cash-usd-outline",
    text: "service",
  },
];

const menuList = [
  {
    icon: (
      <Icon
        IconComponent={
          <Entypo name="location-pin" size={24} color={colors.white} />
        }
        backgroundColor="#8C7AEE"
        size={40}
      />
    ),
    title: "address",
    description: "Ensure your harvesing address",
  },
  {
    icon: (
      <Icon
        IconComponent={
          <AntDesign name="lock1" size={24} color={colors.white} />
        }
        backgroundColor="#F468B7"
        size={40}
      />
    ),
    title: "privacy",
    description: "System permission change",
  },
  {
    icon: (
      <Icon
        IconComponent={<Entypo name="menu" size={24} color={colors.white} />}
        backgroundColor="#FFC85A"
        size={40}
      />
    ),
    title: "general",
    description: "Basic functional settings",
  },
  {
    icon: (
      <Icon
        IconComponent={
          <Ionicons name="notifications" size={24} color={colors.white} />
        }
        backgroundColor="#5CD1D3"
        size={40}
      />
    ),
    title: "notification",
    description: "Take over the news in time",
  },
];

const headerComponent = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <FlatList
        data={iconList}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => (
          <Icon
            name={item.name}
            text={item.text}
            backgroundColor={colors.lightgrey}
            size={60}
            iconSize={30}
          />
        )}
        numColumns={iconList.length}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
      />
    </View>
  );
};

function ProfileScreen({}) {
  return (
    <Screen style={styles.container}>
      <MyText style={styles.topText}>Center</MyText>
      <ProfileCard
        data={{
          title: "ibrahim arif",
          description: "A trendsetter",
          image: require("../assets/user.jpg"),
          collect: 50,
          attention: 60,
          track: 461,
          coupon: 59,
        }}
      />

      <View style={{ flex: 1 }}>
        <FlatList
          data={menuList}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => null}
              description={item.description}
              IconComponent={item.icon}
              RightComponent={
                <Entypo
                  name="chevron-small-right"
                  size={24}
                  color={colors.darkgrey}
                />
              }
              style={{
                backgroundColor: "#F6F5F8",
                borderRadius: 30,
                marginBottom: 20,
                height: 70,
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={headerComponent}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  topText: {
    fontSize: 34,
    top: 20,
    fontWeight: "bold",
    marginBottom: 40,
    marginLeft: 10,
  },
});
export default ProfileScreen;
