import React from "react";
import { View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import Styles from "./styles/Styles";
import { handleNavigationChange } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.appContainer}>
        <AppNavigator
          onNavigationStateChange={handleNavigationChange}
          uriPrefix="/app"
        />
      </View>
    );
  }
}
