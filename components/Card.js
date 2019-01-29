import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { withNavigation } from "react-navigation";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: this.props.uri }}
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
      </View>
    );
  }
}
export default withNavigation(Card);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 30,
    margin: 3,
    fontWeight: "bold"
  }
});
