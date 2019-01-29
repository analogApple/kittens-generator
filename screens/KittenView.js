import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default class KittenView extends React.Component {
  static navigationOptions = {
    title: "Kitten description"
  };
  render() {
    const { navigation } = this.props;
    const uri = navigation.getParam("uri");
    const name = navigation.getParam("name");
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image style={{ width: 350, height: 350 }} source={{ uri: uri }} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            hendrerit nunc tellus, suscipit venenatis tortor volutpat ac. Sed
            vel ipsum eget metus scelerisque feugiat. Aliquam quam orci,
            eleifend bibendum neque efficitur, ullamcorper tempus diam. Fusce
            leo mauris, cursus interdum leo id, imperdiet sagittis erat. Nulla
            eu nulla euismod, euismod risus id, maximus arcu. Vivamus lobortis,
            ligula non eleifend tempus, purus sem auctor mi, quis placerat
            tortor risus ut erat. Nam eget pretium mauris, eu mollis sem.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

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
  },
  description: {
    fontSize: 15,
    margin: 3
  }
});
