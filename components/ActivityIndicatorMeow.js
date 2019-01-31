import React from "react";
import { Text, View } from "react-native";
import Styles from "../styles/Styles";

class ActivityIndicatorMoew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat: true
    };
  }

  componentDidMount = () => {
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
      </View>
    );
  }
}

export default ActivityIndicatorMoew;
