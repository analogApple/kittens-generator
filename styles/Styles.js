import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";

const { width, height } = Dimensions.get("window");
const primaryColor = "#c7d2e2";
const secondaryColor = "#8d96a3";
const tabColor = "#00bdce";

export default (Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: primaryColor
  },
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  nameListItem: {
    fontSize: 30,
    margin: 3,
    fontWeight: "bold"
  },
  nameView: {
    backgroundColor: primaryColor,
    fontSize: 30,
    margin: 3,
    fontWeight: "bold"
  },
  descriptionView: {
    backgroundColor: primaryColor,
    fontSize: 15,
    margin: 3
  },
  longTab: {
    height: 3,
    backgroundColor: tabColor
  },
  listItemTab: {
    height: 3,
    width: 300,
    backgroundColor: tabColor,
    margin: 3
  },
  countBarContainer: { backgroundColor: secondaryColor },
  countBar: {
    margin: 10,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  countBarDisplayCountNumbers: {
    height: 25,
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlignVertical: "bottom"
  },
  countBarRegularText: {
    height: 25,
    textAlignVertical: "bottom"
  },
  countBarNumberInputBox: {
    height: 25,
    width: 40,
    borderBottomColor: "#485c7c",
    borderBottomWidth: 2,
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "bottom"
  },
  none: {
    height: 60
  }
}));

containerStyle = () => {
  let style = {
    width: width,
    height: height,
    backgroundColor: "black",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center"
  };
  return style;
};
funkyColors = () => {
  let colors = ["#00ff26", "#fff600", "#ff007f", "#00ddff", "#fa6bff"];
  let i = parseInt(Math.random() * 5);
  let style = {
    color: colors[i],
    width: width,
    height: 60,
    textAlign: "center"
  };
  return style;
};
