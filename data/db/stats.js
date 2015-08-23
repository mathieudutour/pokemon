const data = {
  "1": {
    damageClassId: null,
    "identifier":"hp",
    isBattleOnly: false,
    name: "HP"
  },
  "2": {
    damageClassId: 2,
    "identifier":"attack",
    isBattleOnly: false,
    name: "Attack"
  },
  "3": {
    damageClassId: 2,
    "identifier":"defense",
    isBattleOnly: false,
    name: "Defense"
  },
  "4": {
    damageClassId: 3,
    "identifier":"special-attack",
    isBattleOnly: false,
    name: "Special Attack"
  },
  "5": {
    damageClassId: 3,
    "identifier":"special-defense",
    isBattleOnly: false,
    name: "Special Defense"
  },
  "6": {
    damageClassId: null,
    "identifier":"speed",
    isBattleOnly: false,
    name: "Speed"
  },
  "7": {
    damageClassId: null,
    "identifier":"accuracy",
    isBattleOnly: true,
    name: "Accuracy"
  },
  "8": {
    damageClassId: null,
    "identifier":"evasion",
    isBattleOnly: true,
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
