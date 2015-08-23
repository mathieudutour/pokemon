const data = {
  "1": {
    "identifier":"cave",
    name: "cave"
  },
  "2": {
    "identifier":"forest",
    name: "forest"
  },
  "3": {
    "identifier":"grassland",
    name: "grassland"
  },
  "4": {
    "identifier":"mountain",
    name: "mountain"
  },
  "5": {
    "identifier":"rare",
    name: "rare"
  },
  "6": {
    "identifier":"rough-terrain",
    name: "rough terrain"
  },
  "7": {
    "identifier":"sea",
    name: "sea"
  },
  "8": {
    "identifier":"urban",
    name: "urban"
  },
  "9": {
    "identifier":"waters-edge",
    name: "water's edge"
  }
};

class PokemonHabitat extends Object {}

export default {
  PokemonHabitat,
  pokemonHabitats: Object.keys(data).map((id) => {
    const model = new PokemonHabitat();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
