import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import DisplayCountBar from "../components/DisplayCountBar";
import InternetStatus from "../components/InternetStatusListener";
import ActivityIndicatorMeow from "../components/ActivityIndicatorMeow";
import GenerateKittensList from "../components/GenerateKittensList";

export default class KittensList extends React.Component {
  static navigationOptions = {
    title: "Kittens Generator 3000",
    headerStyle: {
      backgroundColor: "grey"
    }
  };

  constructor(props) {
    super(props);
    props.autobind = false;
    this.state = {
      card: [],
      isReady: false
    };
  }
  componentDidMount = async () => {
    let state = await GenerateKittensList(30);
    this.setState(state);
    this.setState({ isReady: true });
  };

  changeDisplayCount = async x => {
    this.setState({ isReady: false });
    let state = await GenerateKittensList(x);
    this.setState(state);
    this.setState({ isReady: true });
  };
  renderItem = ({ item }) => {
    return <ListItem key={item.count} name={item.name} uri={item.uri} />;
  };
  keyExtractor = item => {
    return item.count.toString();
  };
  render() {
    return (
      <View>
        {this.state.isReady ? (
          <ScrollView>
            <InternetStatus />
            <DisplayCountBar changeDisplayCount={this.changeDisplayCount} />

            <FlatList
              data={this.state.card}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </ScrollView>
        ) : (
          <ActivityIndicatorMeow />
        )}
      </View>
    );
  }
}
