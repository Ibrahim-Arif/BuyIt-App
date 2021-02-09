import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  LogBox,
  ScrollView,
} from "react-native";

import DiamondButton from "../components/DiamondButton";
import Heading from "../components/Heading";
import ListItemCard from "../components/ListItemCard";
import ListItemCardDetail from "../components/ListItemCardDetail";
import Icon from "../components/Icon";

const menuIcons = [
  { iconName: "coach-lamp" },
  { iconName: "bookshelf" },
  { iconName: "bag-personal-outline" },
  { iconName: "bed-queen-outline" },
  { iconName: "file-cabinet" },
  { iconName: "chair-rolling" },
];
const itemList = [
  {
    id: 1,
    image: require("../assets/1.webp"),
    title: "Landscape",
    description: "Matter made",
    price: 650,
  },
  {
    id: 2,
    image: require("../assets/2.jpg"),
    title: "Table",
    description: "Made in China",
    price: 1000,
  },
  {
    id: 3,
    image: require("../assets/3.jpg"),
    title: "Alycia",
    description: "model type",
    price: 3500,
  },
  {
    id: 4,
    image: require("../assets/4.jpg"),
    title: "default",
    description: "user",
    price: 500,
  },
];
const popularItemList = [
  {
    id: 1,
    image: require("../assets/1.webp"),
    title: "Landscape",
    description: "Matter made",
    price: 650,
  },
  {
    id: 2,
    image: require("../assets/2.jpg"),
    title: "Table",
    description: "Made in China",
    price: 1000,
  },
];

function MainScreen({ navigation }) {
  const [selectedIcon, setSelectedIcon] = useState(menuIcons[0].iconName);
  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <FlatList
            data={menuIcons}
            keyExtractor={(item) => item.iconName}
            renderItem={({ item }) => (
              <DiamondButton
                iconName={item.iconName}
                onPress={() => setSelectedIcon(item.iconName)}
                isActive={selectedIcon === item.iconName}
                insideDiamond
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <Icon
            image={require("../assets/user.jpg")}
            size={50}
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Profile")}
          />
        </View>

        <Heading
          title="Model"
          description="Good quality items"
          style={styles.heading}
        />

        <View style={styles.itemList}>
          <FlatList
            data={itemList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItemCard
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                onPress={() => navigation.navigate("Product")}
                style={{ marginRight: 30 }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<View style={{ marginLeft: 15 }} />}
            ListFooterComponent={<View style={{ marginRight: 15 }} />}
          />
        </View>

        <Heading
          title="Popular"
          description="In recent month"
          style={styles.heading}
        />

        <FlatList
          data={popularItemList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItemCardDetail
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              onPress={() => navigation.navigate("Product")}
              style={{ marginBottom: 15, elevation: 3 }}
            />
          )}
          style={{ marginHorizontal: 10 }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  itemList: {
    height: Dimensions.get("screen").height * 0.45,
  },
  heading: {
    marginVertical: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
  },
});
export default MainScreen;
