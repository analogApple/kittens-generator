import { createAppContainer, createStackNavigator } from "react-navigation";

import KittensList from "../screens/KittensList";
import KittenView from "../screens/KittenView";
import Card from "../components/ListItem";

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
