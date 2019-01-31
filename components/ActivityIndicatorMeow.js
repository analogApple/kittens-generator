import React from "react";
import { Text, View, StyleSheet } from "react-native";

class ActivityIndicatorMoew extends React.Component {
  state = {
    repeat: true
  };
  constructor(props) {
    super(props);
    state = {
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
    funkyColors = () => {
      let colors = ["#00ff26", "#fff600", "#ff007f", "#00ddff", "#fa6bff"];
      let i = parseInt(Math.random() * 5);
      let style = { color: colors[i] };
      return style;
    };
    return (
      <View>
        {this.state.repeat ? (
          <Text style={styles.none} />
        ) : (
          <Text style={styles.large}>
            <Text style={funkyColors()}>MEOW</Text>
          </Text>
        )}
      </View>
    );
  }
}

export default ActivityIndicatorMoew;

const styles = StyleSheet.create({
  large: {
    height: 200,
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center"
  },
  none: {
    height: 200
  }
});
