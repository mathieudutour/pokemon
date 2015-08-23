const data = {
  "1": {
    "identifier":"level-up",
    "description": "Learned when a Pokémon reaches a certain level."
  },
  "2": {
    "identifier":"egg",
    "description": "Appears on a newly-hatched Pokémon, if the father had the same move."
  },
  "3": {
    "identifier":"tutor",
    "description": "Can be taught at any time by an NPC."
  },
  "4": {
    "identifier":"machine",
    "description": "Can be taught at any time by using a TM or HM."
  },
  "5": {
    "identifier":"stadium-surfing-pikachu",
    "description": "Learned when a non-rental Pikachu helps beat Prime Cup Master Ball R-2. It must participate in every battle, and you must win with no continues."
  },
  "6": {
    "identifier":"light-ball-egg",
    "description": "Appears on a Pichu whose mother was holding a Light Ball. The father cannot be Ditto."
  },
  "7": {
    "identifier":"colosseum-purification",
    "description": "Appears on a Shadow Pokémon as it becomes increasingly purified."
  },
  "8": {
    "identifier":"xd-shadow",
    "description": "Appears on a Snatched Shadow Pokémon."
  },
  "9": {
    "identifier":"xd-purification",
    "description": "Appears on a Shadow Pokémon as it becomes increasingly purified."
  },
  "10": {
    "identifier":"form-change",
    "description": "Appears when Rotom changes to this form. Disappears if Rotom becomes another form and this move can only be learned by form change."
  }
}

class MoveLearningMethod extends Object {}

export default {
  MoveLearningMethod,
  moveLearningMethods: Object.keys(data).map((id) => {
    const model = new MoveLearningMethod();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
