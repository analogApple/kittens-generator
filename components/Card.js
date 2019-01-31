import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { withNavigation } from "react-navigation";
import CacheImage from "./CacheImage";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <CacheImage
          style={{ width: 200, height: 200, marginTop: 20 }}
          uri={this.props.uri}
        />
        <Text
          style={styles.name}
          onPress={() => {
            this.props.navigation.navigate("KittenView", {
              uri: this.props.uri,
              name: this.props.name
            });
          }}
        >
          {this.props.name} {this.props.count}
        </Text>
        <View
          style={{
            height: 3,
            width: 300,
            backgroundColor: "#485c7c",
            margin: 3
          }}
        />
      </View>
    );
  }
}
export default withNavigation(Card);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e59ed9",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 30,
    margin: 3,
    fontWeight: "bold"
  }
});
