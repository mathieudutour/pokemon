const colors = {
  "1": {
    "identifier":"black",
    name: "Black"
  },
  "2": {
    "identifier":"blue",
    name: "Blue"
  },
  "3": {
    "identifier":"brown",
    name: "Brown"
  },
  "4": {
    "identifier":"gray",
    name: "Gray"
  },
  "5": {
    "identifier":"green",
    name: "Green"
  },
  "6": {
    "identifier":"pink",
    name: "Pink"
  },
  "7": {
    "identifier":"purple",
    name: "Purple"
  },
  "8": {
    "identifier":"red",
    name: "Red"
  },
  "9": {
    "identifier":"white",
    name: "White"
  },
  "10": {
    "identifier":"yellow",
    name: "Yellow"
  }
}


class Color extends Object {}

export default {
  Color,
  colors: Object.keys(colors).map((id) => {
    const model = new Color();

    model.id = id;
    Object.keys(colors[id]).forEach((key) => {
      model[key] = colors[id][key];
    })
    return model;
  }),
}
