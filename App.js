import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import {
  onNavigationStateChange,
  handleNavigationChange
} from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          onNavigationStateChange={handleNavigationChange}
          uriPrefix="/app"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2"
  },
  font: { fontSize: 50 }
});
