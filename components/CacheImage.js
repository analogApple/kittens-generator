import React from "react";
import { Image, View, ActivityIndicator } from "react-native";
import shorthash from "shorthash";
import { FileSystem } from "expo";
import ActivityIndicatorMoew from "./ActivityIndicatorMeow";

export default class CacheImage extends React.Component {
  state = {
    source: null
  };

  componentDidMount = async () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);

    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      this.setState({
        source: {
          uri: image.uri
        }
      });
      return;
    }

    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
      source: {
        uri: newImage.uri
      }
    });
  };

  render() {
    return (
      <View>
        {this.state.source ? (
          <Image style={this.props.style} source={this.state.source} />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}
