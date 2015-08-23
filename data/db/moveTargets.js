const data = {
  "1": {
    "identifier":"specific-move",
    "name":"Specific move",
    "description":"One specific move.  How this move is chosen depends upon on the move being used."
  },
  "2": {
    "identifier":"selected-pokemon-me-first",
    "name":"Selected Pokémon",
    "description":"One other Pokémon on the field, selected by the trainer.  Stolen moves reuse the same target."
  },
  "3": {
    "identifier":"ally",
    "name":"Ally",
    "description":"The user's ally (if any)."
  },
  "4": {
    "identifier":"users-field",
    "name":"User's field",
    "description":"The user's side of the field.  Affects the user and its ally (if any)."
  },
  "5": {
    "identifier":"user-or-ally",
    "name":"User or ally",
    "description":"Either the user or its ally, selected by the trainer."
  },
  "6": {
    "identifier":"opponents-field",
    "name":"Opponent's field",
    "description":"The opposing side of the field.  Affects opposing Pokémon."
  },
  "7": {
    "identifier":"user",
    "name":"User",
    "description":"The user."
  },
  "8": {
    "identifier":"random-opponent",
    "name":"Random opponent",
    "description":"One opposing Pokémon, selected at random."
  },
  "9": {
    "identifier":"all-other-pokemon",
    "name":"All other Pokémon",
    "description":"Every other Pokémon on the field."
  },
  "10": {
    "identifier":"selected-pokemon",
    "name":"Selected Pokémon",
    "description":"One other Pokémon on the field, selected by the trainer."
  },
  "11": {
    "identifier":"all-opponents",
    "name":"All opponents",
    "description":"All opposing Pokémon."
  },
  "12": {
    "identifier":"entire-field",
    "name":"Entire field",
    "description":"The entire field.  Affects all Pokémon."
  },
  "13": {
    "identifier":"user-and-allies",
    "name":"User and allies",
    "description":"The user and its allies."
  },
  "14": {
    "identifier":"all-pokemon",
    "name":"All Pokémon",
    "description":"Every Pokémon on the field."
  }
};

class MoveTarget extends Object {}

export default {
  MoveTarget,
  moveTargets: Object.keys(data).map((id) => {
    const model = new MoveTarget();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
