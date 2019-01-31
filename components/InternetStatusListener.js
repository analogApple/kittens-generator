import { NetInfo } from "react-native";
import React from "react";
import { View, Text } from "react-native";

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
      alert("Oops!! No Internet Connection Available");
      state.isConnected = false;
      this.setState(state);
    }
  };
  render() {
    return this.state.isConnected ? (
      <View />
    ) : (
      <Text style={{ backgroundColor: "red", height: 120 }}>
        !!!!!!!!!!!!!!!!!No internet
      </Text>
    );
  }
}
