import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "./app/screens/MainScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

const navigator = createStackNavigator(
  {
    Home: MainScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigatorOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
