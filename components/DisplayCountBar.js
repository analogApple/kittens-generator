import React from "react";
import { Text, View, TextInput, Alert } from "react-native";
import Styles from "../styles/Styles";

class DisplayCountBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ""
    };
  }
  onChanged = count => {
    this.setState({
      count: count.replace(/[^0-9]/g, "")
    });
  };
  checkForLimit = count => {
    if (count > 150) {
      Alert.alert(
        "WOAH! 😨",
        "Are you sure you can handle this many kittens? (this might brake)",
        [
          {
            text: "Oh no!",
            onPress: () => {
              this.setState({
                count: ""
              });
            },
            style: "cancel"
          },
          {
            text: "Let's see...",
            onPress: () => {
              this.props.changeDisplayCount(count);
              this.setState({
                text: ""
              });
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      this.props.changeDisplayCount(count);
    }
  };

  render() {
    return (
      <View style={Styles.countBarContainer}>
        <View style={Styles.countBar}>
          <Text style={Styles.countBarRegularText}>Want to see </Text>
          <Text
            style={Styles.countBarDisplayCountNumbers}
            onPress={() => {
              this.props.changeDisplayCount(30);
            }}
          >
            30
          </Text>
          <Text style={Styles.countBarRegularText}>, </Text>
          <Text
            style={Styles.countBarDisplayCountNumbers}
            onPress={() => {
              this.props.changeDisplayCount(50);
            }}
          >
            50
          </Text>
          <Text style={Styles.countBarRegularText}> maybe </Text>
          <Text
            style={Styles.countBarDisplayCountNumbers}
            onPress={() => {
              this.props.changeDisplayCount(100);
            }}
          >
            100
          </Text>
          <Text style={Styles.countBarRegularText}> kittens?</Text>
        </View>
        <View style={Styles.countBar}>
          <Text style={Styles.countBarRegularText}>You tell me </Text>
          <TextInput
            style={Styles.countBarNumberInputBox}
            keyboardType="numeric"
            value={this.state.count}
            onChangeText={text => this.onChanged(text)}
            onSubmitEditing={() => {
              this.checkForLimit(this.state.count);
              this.setState({
                count: ""
              });
            }}
          />
        </View>
        <View style={Styles.longTab} />
      </View>
    );
  }
}

export default DisplayCountBar;
