import React from "react";
import { Text, View, Image } from "react-native";
import { withNavigation } from "react-navigation";
import Styles from "../styles/Styles";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={Styles.container}>
        <Image
          style={{ width: 200, height: 200, marginTop: 20 }}
          source={{ uri: this.props.uri }}
        />
        <Text
          style={Styles.nameListItem}
          onPress={() => {
            this.props.navigation.navigate("KittenView", {
              uri: this.props.uri,
              name: this.props.name
            });
          }}
        >
          {this.props.name}
        </Text>
        <View style={Styles.listItemTab} />
      </View>
    );
  }
}
export default withNavigation(ListItem);
