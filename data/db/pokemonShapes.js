const data = {
  "1": {
    "identifier":"ball",
    "name":"Ball",
    awesomeName: "Pomaceous"
  },
  "2": {
    "identifier":"squiggle",
    "name":"Squiggle",
    awesomeName: "Caudal"
  },
  "3": {
    "identifier":"fish",
    "name":"Fish",
    awesomeName: "Ichthyic"
  },
  "4": {
    "identifier":"arms",
    "name":"Arms",
    awesomeName: "Brachial"
  },
  "5": {
    "identifier":"blob",
    "name":"Blob",
    awesomeName: "Alvine"
  },
  "6": {
    "identifier":"upright",
    "name":"Upright",
    awesomeName: "Sciurine"
  },
  "7": {
    "identifier":"legs",
    "name":"Legs",
    awesomeName: "Crural"
  },
  "8": {
    "identifier":"quadruped",
    "name":"Quadruped",
    awesomeName: "Mensal"
  },
  "9": {
    "identifier":"wings",
    "name":"Wings",
    awesomeName: "Alar"
  },
  "10": {
    "identifier":"tentacles",
    "name":"Tentacles",
    awesomeName: "Cilial"
  },
  "11": {
    "identifier":"heads",
    "name":"Heads",
    awesomeName: "Polycephalic"
  },
  "12": {
    "identifier":"humanoid",
    "name":"Humanoid",
    awesomeName: "Anthropomorphic"
  },
  "13": {
    "identifier":"bug-wings",
    "name":"Bug wings",
    awesomeName: "Lepidopterous"
  },
  "14": {
    "identifier":"armor",
    "name":"Armor",
    awesomeName: "Chitinous"
  }
};

class PokemonShape extends Object {}

export default {
  PokemonShape,
  pokemonShapes: Object.keys(data).map((id) => {
    const model = new PokemonShape();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
