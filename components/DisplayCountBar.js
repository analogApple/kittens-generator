import React from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";

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
      <View style={styles.container}>
        <View style={styles.displayCountBar}>
          <Text style={styles.regularText}>Want to see </Text>
          <Text
            style={styles.displayCountNumbers}
            onPress={() => {
              this.props.changeDisplayCount(30);
            }}
          >
            30
          </Text>
          <Text style={styles.regularText}>, </Text>
          <Text
            style={styles.displayCountNumbers}
            onPress={() => {
              this.props.changeDisplayCount(50);
            }}
          >
            50
          </Text>
          <Text style={styles.regularText}> maybe </Text>
          <Text
            style={styles.displayCountNumbers}
            onPress={() => {
              this.props.changeDisplayCount(100);
            }}
          >
            100
          </Text>
          <Text style={styles.regularText}> kittens?</Text>
        </View>
        <View style={styles.displayCountBar}>
          <Text style={styles.regularText}>You tell me </Text>
          <TextInput
            style={styles.numberInputBox}
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
      </View>
    );
  }
}

export default DisplayCountBar;

const styles = StyleSheet.create({
  container: { backgroundColor: "#ad72a3" },
  displayCountBar: {
    margin: 10,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  displayCountNumbers: {
    height: 25,
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlignVertical: "bottom"
  },
  regularText: {
    height: 25,
    textAlignVertical: "bottom"
  },
  numberInputBox: {
    height: 25,
    width: 40,
    borderBottomColor: "#485c7c",
    borderBottomWidth: 2,
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "bottom"
  }
});
