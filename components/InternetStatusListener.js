import React from "react";
import { View, Text, StyleSheet, NetInfo } from "react-native";

export default class InternetStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isConnected: true };
  }
  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }
  handleConnectivityChange = isConnected => {
    let state = this.state;
    if (isConnected) {
      state.isConnected = true;
      this.setState(state);
    } else {
      state.isConnected = false;
      this.setState(state);
    }
  };
  render() {
    return this.state.isConnected ? (
      <View />
    ) : (
      <Text style={styles.noInternetConnectionBar}>
        Oops!! No Internet Connection Available
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  noInternetConnectionBar: {
    height: 120,
    backgroundColor: "#ff7b00",
    fontSize: 30
  }
});
