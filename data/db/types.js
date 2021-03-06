const data = {
  "1": {
    "identifier":"normal",
    damageClassId: 2,
    "name": "Normal",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 100,
      "4": 100,
      "5": 100,
      "6": 50,
      "7": 100,
      "8": 0,
      "10": 100,
      "11": 100,
      "12": 100,
      "13": 100,
      "14": 100,
      "15": 100,
      "16": 100,
    }
  },
  "2": {
    "identifier":"fighting",
    damageClassId: 2,
    "name": "Fighting",
    "efficacity": {
      "1": 200,
      "2": 100,
      "3": 50,
      "4": 50,
      "5": 100,
      "6": 200,
      "7": 50,
      "8": 0,
      "10": 100,
      "11": 100,
      "12": 100,
      "13": 100,
      "14": 50,
      "15": 200,
      "16": 100,
    }
  },
  "3": {
    "identifier":"flying",
    damageClassId: 2,
    "name": "Flying",
    "efficacity": {
      "1": 100,
      "2": 200,
      "3": 100,
      "4": 100,
      "5": 100,
      "6": 50,
      "7": 200,
      "8": 100,
      "10": 100,
      "11": 100,
      "12": 200,
      "13": 50,
      "14": 100,
      "15": 100,
      "16": 100,
    }
  },
  "4": {
    "identifier":"poison",
    damageClassId: 2,
    "name": "Poison",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 100,
      "4": 50,
      "5": 50,
      "6": 50,
      "7": 100,
      "8": 50,
      "10": 100,
      "11": 100,
      "12": 200,
      "13": 100,
      "14": 100,
      "15": 100,
      "16": 100,
    }
  },
  "5": {
    "identifier":"ground",
    damageClassId: 2,
    "name": "Ground",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 0,
      "4": 200,
      "5": 100,
      "6": 200,
      "7": 50,
      "8": 100,
      "10": 200,
      "11": 100,
      "12": 50,
      "13": 200,
      "14": 100,
      "15": 100,
      "16": 100,
    }
  },
  "6": {
    "identifier":"rock",
    damageClassId: 2,
    "name": "Rock",
    "efficacity": {
      "1": 100,
      "2": 50,
      "3": 200,
      "4": 100,
      "5": 50,
      "6": 100,
      "7": 200,
      "8": 100,
      "10": 200,
      "11": 100,
      "12": 100,
      "13": 100,
      "14": 100,
      "15": 200,
      "16": 100,
    }
  },
  "7": {
    "identifier":"bug",
    damageClassId: 2,
    "name": "Bug",
    "efficacity": {
      "1": 100,
      "2": 50,
      "3": 50,
      "4": 50,
      "5": 100,
      "6": 100,
      "7": 100,
      "8": 50,
      "10": 50,
      "11": 100,
      "12": 200,
      "13": 100,
      "14": 200,
      "15": 100,
      "16": 100,
    }
  },
  "8": {
    "identifier":"ghost",
    damageClassId: 2,
    "name": "Ghost",
    "efficacity": {
      "1": 0,
      "2": 100,
      "3": 100,
      "4": 100,
      "5": 100,
      "6": 100,
      "7": 100,
      "8": 200,
      "10": 100,
      "11": 100,
      "12": 100,
      "13": 100,
      "14": 200,
      "15": 100,
      "16": 100,
    }
  },
  "10": {
    "identifier":"fire",
    damageClassId: 3,
    "name": "Fire",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 100,
      "4": 100,
      "5": 100,
      "6": 50,
      "7": 200,
      "8": 100,
      "10": 50,
      "11": 50,
      "12": 200,
      "13": 100,
      "14": 100,
      "15": 200,
      "16": 50,
    }
  },
  "11": {
    "identifier":"water",
    damageClassId: 3,
    "name": "Water",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 100,
      "4": 100,
      "5": 200,
      "6": 200,
      "7": 100,
      "8": 100,
      "10": 200,
      "11": 50,
      "12": 50,
      "13": 100,
      "14": 100,
      "15": 100,
      "16": 50,
    }
  },
  "12": {
    "identifier":"grass",
    damageClassId: 3,
    "name": "Grass",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 50,
      "4": 50,
      "5": 200,
      "6": 200,
      "7": 50,
      "8": 100,
      "10": 50,
      "11": 200,
      "12": 50,
      "13": 100,
      "14": 100,
      "15": 100,
      "16": 50,
    }
  },
  "13": {
    "identifier":"electric",
    damageClassId: 3,
    "name": "Electric",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 200,
      "4": 100,
      "5": 0,
      "6": 100,
      "7": 100,
      "8": 100,
      "10": 100,
      "11": 200,
      "12": 50,
      "13": 50,
      "14": 100,
      "15": 100,
      "16": 50,
    }
  },
  "14": {
    "identifier":"psychic",
    damageClassId: 3,
    "name": "Psychic",
    "efficacity": {
      "1": 100,
      "2": 200,
      "3": 100,
      "4": 200,
      "5": 100,
      "6": 100,
      "7": 100,
      "8": 100,
      "10": 100,
      "11": 100,
      "12": 100,
      "13": 100,
      "14": 50,
      "15": 100,
      "16": 100,
    }
  },
  "15": {
    "identifier":"ice",
    damageClassId: 3,
    "name": "Ice",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 200,
      "4": 100,
      "5": 200,
      "6": 100,
      "7": 100,
      "8": 100,
      "10": 50,
      "11": 50,
      "12": 200,
      "13": 100,
      "14": 100,
      "15": 50,
      "16": 200,
    }
  },
  "16": {
    "identifier":"dragon",
    damageClassId: 3,
    "name": "Dragon",
    "efficacity": {
      "1": 100,
      "2": 100,
      "3": 100,
      "4": 100,
      "5": 100,
      "6": 100,
      "7": 100,
      "8": 100,
      "10": 100,
      "11": 100,
      "12": 100,
      "13": 100,
      "14": 100,
      "15": 100,
      "16": 200,
    }
  },
};

class Type extends Object {}

export default {
  Type,
  types: Object.keys(data).map((id) => {
    const model = new Type();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
