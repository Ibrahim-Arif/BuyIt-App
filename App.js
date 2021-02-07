import React from "react";
import { StyleSheet, View } from "react-native";

import MainScreen from "./app/screens/MainScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProfileScreen /> */}
      <MainScreen title="Furniture" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
