import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import InternetStatus from "../components/InternetStatusListener";
export default class KittenView extends React.Component {
  static navigationOptions = {
    title: "Kitten description",
    headerStyle: {
      backgroundColor: "grey"
    }
  };
  render() {
    const { navigation } = this.props;
    const uri = navigation.getParam("uri");
    const name = navigation.getParam("name");
    return (
      <View style={Styles.container}>
        <View style={{ height: 10 }} />
        <ScrollView>
          <InternetStatus />
          <View style={Styles.container}>
            <Image
              style={{ width: 350, height: 350, marginTop: 20 }}
              source={{ uri: uri }}
            />
          </View>
          <Text style={Styles.nameView}>{name}</Text>
          <Text style={Styles.descriptionView}>
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
