const data = {
  "1": {
    "damage_class_id":null,
    "identifier":"hp",
    "is_battle_only":"0",
    name: "HP"
  },
  "2": {
    "damage_class_id":2,
    "identifier":"attack",
    "is_battle_only":"0",
    name: "Attack"
  },
  "3": {
    "damage_class_id":2,
    "identifier":"defense",
    "is_battle_only":"0",
    name: "Defense"
  },
  "4": {
    "damage_class_id":3,
    "identifier":"special-attack",
    "is_battle_only":"0",
    name: "Special Attack"
  },
  "5": {
    "damage_class_id":3,
    "identifier":"special-defense",
    "is_battle_only":"0",
    name: "Special Defense"
  },
  "6": {
    "damage_class_id":null,
    "identifier":"speed",
    "is_battle_only":"0",
    name: "Speed"
  },
  "7": {
    "damage_class_id":null,
    "identifier":"accuracy",
    "is_battle_only":"1",
    name: "Accuracy"
  },
  "8": {
    "damage_class_id":null,
    "identifier":"evasion",
    "is_battle_only":"1",
    name: "Evasion"
  }
}

class Stat extends Object {}

export default {
  Stat,
  stats: Object.keys(data).map((id) => {
    const model = new Stat();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
