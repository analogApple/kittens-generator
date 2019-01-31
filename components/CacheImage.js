import shorthash from "shorthash";
import { FileSystem } from "expo";

export default (CacheImage = async () => {
  let uri =
    "http://placekitten.com/" + parseInt(Math.random() * (999 - 300) + 300);
  const name = shorthash.unique(uri);

  const path = `${FileSystem.cacheDirectory}${name}`;
  const image = await FileSystem.getInfoAsync(path);
  if (image.exists) {
    return image.uri;
  }

  const newImage = await FileSystem.downloadAsync(uri, path);
  return newImage.uri;
});
