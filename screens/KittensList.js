import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Card from "../components/Card";
import DisplayCountBar from "../components/DisplayCountBar";

export default class KittensList extends React.Component {
  static navigationOptions = {
    title: "Kittens Generator 3000"
  };

  constructor(props) {
    super(props);
    props.autobind = false;
    this.state = this.generteNewState(30);
  }
  generteNewState = x => {
    let state = {
      card: []
    };
    for (let i = 0; i < x; i++) {
      const name = this.generateNames();
      const uri = this.generateUri();
      state.card = [...state.card, { count: i, name: name, uri: uri }];
    }
    return state;
  };
  generateUri = () => {
    let uri =
      "http://placekitten.com/" + parseInt(Math.random() * (999 - 300) + 300);

    return uri;
  };
  generateNames = () => {
    let nameSyllables = [
      "mao",
      "zin",
      "don",
      "mon",
      "fay",
      "shi",
      "zag",
      "guf",
      "tuf",
      "kon",
      "man",
      "tat",
      "stat"
    ];
    let name = "";
    let numberOfSyllables = Math.random() * (3 - 2) + 2;
    for (let i = 0; i < numberOfSyllables; i++) {
      name =
        name + nameSyllables[Math.floor(Math.random() * nameSyllables.length)];
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  changeDisplayCount = x => {
    let state = this.generteNewState(x);
    this.setState(state);
  };
  renderItem = ({ item }) => {
    return (
      <Card
        key={item.count}
        name={item.name}
        uri={item.uri}
        count={item.count}
      />
    );
  };
  keyExtractor = item => {
    return item.count.toString();
  };
  render() {
    return (
      <View>
        <ScrollView>
          <DisplayCountBar changeDisplayCount={this.changeDisplayCount} />
          <FlatList
            data={this.state.card}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
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
  bottomText: {
    margin: 5,
    marginBottom: 100,
    fontSize: 30
  }
});
