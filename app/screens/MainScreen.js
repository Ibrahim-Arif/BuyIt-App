import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import DiamondButton from "../components/DiamondButton";
import Heading from "../components/Heading";
import ListItemCard from "../components/ListItemCard";
import MyText from "../components/MyText";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuIcons = [
  { iconName: "coach-lamp" },
  { iconName: "bookshelf" },
  { iconName: "bag-personal-outline" },
  { iconName: "bed-queen-outline" },
  { iconName: "file-cabinet" },
  { iconName: "chair-rolling" },
];

const iconProps = {
  selected: {
    backgroundColor: colors.primary,
    size: 60,
    diamondColor: colors.light,
    iconColor: colors.white,
  },
  disselected: {
    backgroundColor: colors.lightgrey,
    size: 50,
    diamondColor: "#BFCBD9",
    iconColor: "#969baa",
  },
};

const itemList = [
  {
    id: 1,
    image: require("../assets/user.jpg"),
    title: "Landscape",
    description: "Matter made",
    price: 650,
  },
  {
    id: 2,
    image: require("../assets/Elizabeth.jpg"),
    title: "Table",
    description: "Made in China",
    price: 1000,
  },
  {
    id: 3,
    image: require("../assets/Alycia.jpg"),
    title: "Alycia",
    description: "model type",
    price: 3500,
  },
  {
    id: 4,
    image: require("../assets/defaultUser.jpg"),
    title: "default",
    description: "user",
    price: 500,
  },
  {
    id: 5,
    image: require("../assets/defaultUser.jpg"),
    title: "default",
    description: "user",
    price: 500,
  },
  {
    id: 6,
    image: require("../assets/defaultUser.jpg"),
    title: "default",
    description: "user",
    price: 500,
  },
];

function MainScreen({ title }) {
  const [selectedIcon, setSelectedIcon] = useState(menuIcons[0].iconName);

  return (
    <Screen style={styles.container}>
      <Heading title={title} titleSize={34} style={styles.topText} />

      <View style={styles.flatlist}>
        <FlatList
          data={menuIcons}
          keyExtractor={(item) => item.iconName}
          renderItem={({ item }) => (
            <DiamondButton
              iconName={item.iconName}
              onPress={() => setSelectedIcon(item.iconName)}
              props={
                selectedIcon === item.iconName
                  ? iconProps["selected"]
                  : iconProps["disselected"]
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Heading title="Model" description="Good quality items" />

      <View style={{ height: "50%", top: 20 }}>
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItemCard
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              style={{ marginRight: 30 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<View style={{ marginLeft: 15 }} />}
          ListFooterComponent={<View style={{ marginRight: 15 }} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  topText: {
    top: 20,
    marginBottom: "7%",
  },
  flatlist: {
    paddingHorizontal: 10,
    marginBottom: "3%",
  },
});
export default MainScreen;
