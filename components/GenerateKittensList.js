import CacheImage from "../components/CacheImage";

export default (GenerateKittensList = async x => {
  let state = {
    card: []
  };
  for (let i = 0; i < x; i++) {
    const name = generateNames();
    uri = await CacheImage();
    state.card = [...state.card, { count: i, name: name, uri: uri }];
  }
  return state;
});

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
