const data = {
  "1": {
    "identifier":"ball",
    "name":"Ball",
    "awesome_name":"Pomaceous"
  },
  "2": {
    "identifier":"squiggle",
    "name":"Squiggle",
    "awesome_name":"Caudal"
  },
  "3": {
    "identifier":"fish",
    "name":"Fish",
    "awesome_name":"Ichthyic"
  },
  "4": {
    "identifier":"arms",
    "name":"Arms",
    "awesome_name":"Brachial"
  },
  "5": {
    "identifier":"blob",
    "name":"Blob",
    "awesome_name":"Alvine"
  },
  "6": {
    "identifier":"upright",
    "name":"Upright",
    "awesome_name":"Sciurine"
  },
  "7": {
    "identifier":"legs",
    "name":"Legs",
    "awesome_name":"Crural"
  },
  "8": {
    "identifier":"quadruped",
    "name":"Quadruped",
    "awesome_name":"Mensal"
  },
  "9": {
    "identifier":"wings",
    "name":"Wings",
    "awesome_name":"Alar"
  },
  "10": {
    "identifier":"tentacles",
    "name":"Tentacles",
    "awesome_name":"Cilial"
  },
  "11": {
    "identifier":"heads",
    "name":"Heads",
    "awesome_name":"Polycephalic"
  },
  "12": {
    "identifier":"humanoid",
    "name":"Humanoid",
    "awesome_name":"Anthropomorphic"
  },
  "13": {
    "identifier":"bug-wings",
    "name":"Bug wings",
    "awesome_name":"Lepidopterous"
  },
  "14": {
    "identifier":"armor",
    "name":"Armor",
    "awesome_name":"Chitinous"
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
