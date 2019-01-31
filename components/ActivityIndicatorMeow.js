import React from "react";
import { Text, View } from "react-native";
import Styles from "../styles/Styles";

class ActivityIndicatorMoew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat: true,
      loadingTakesTooLong: ""
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      let state = this.state;
      state.loadingTakesTooLong = " Woah! Caching really takes some time";
      this.setState(state);
    }, 2000);

    setTimeout(() => {
      let state = this.state;
      state.loadingTakesTooLong = "Never tought it can take so long! Really";
      this.setState(state);
    }, 10000);

    this.interval = setInterval(this.blink, 10);
  };

  blink = () => {
    let state = this.state;
    state.repeat = !state.repeat;
    this.setState(state);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <View style={containerStyle()}>
        {this.state.repeat ? (
          <Text style={Styles.none} />
        ) : (
          <Text style={funkyColors()}>MEOW</Text>
        )}
        <Text style={{ color: "white" }}>{this.state.loadingTakesTooLong}</Text>
      </View>
    );
  }
}

export default ActivityIndicatorMoew;
