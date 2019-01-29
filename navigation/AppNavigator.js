import { createAppContainer, createStackNavigator } from "react-navigation";

import KittensList from "../screens/KittensList";
import KittenView from "../screens/KittenView";
import Card from "../components/Card";

export default createAppContainer(
  createStackNavigator(
    {
      KittensList: {
        screen: KittensList
      },
      KittenView: {
        screen: KittenView
      }
    },
    {
      initialRouteName: "KittensList"
    }
  )
);
