const ailments = {
  "-1": {
    "identifier":"unknown",
    description: '????',
  },
  "0": {
    "identifier":"none",
    description: 'None',
  },
  "1": {
    "identifier":"paralysis",
    description: 'Paralysis',
  },
  "2": {
    "identifier":"sleep",
    description: 'Sleep',
  },
  "3": {
    "identifier":"freeze",
    description: 'Freeze',
  },
  "4": {
    "identifier":"burn",
    description: 'Burn',
  },
  "5": {
    "identifier":"poison",
    description: 'Poison',
  },
  "6": {
    "identifier":"confusion",
    description: 'Confusion',
  },
  "7": {
    "identifier":"infatuation",
    description: 'Infatuation',
  },
  "8": {
    "identifier":"trap",
    description: 'Trap',
  },
  "9": {
    "identifier":"nightmare",
    description: 'Nightmare',
  },
  "12": {
    "identifier":"torment",
    description: 'Torment',
  },
  "13": {
    "identifier":"disable",
    description: 'Disable',
  },
  "14": {
    "identifier":"yawn",
    description: 'Yawn',
  },
  "15": {
    "identifier":"heal-block",
    description: 'Heal Block',
  },
  "17": {
    "identifier":"no-type-immunity",
    description: 'No type immunity',
  },
  "18": {
    "identifier":"leech-seed",
    description: 'Leech Seed',
  },
  "19": {
    "identifier":"embargo",
    description: 'Embargo',
  },
  "20": {
    "identifier":"perish-song",
    description: 'Perish Song',
  },
  "21": {
    "identifier":"ingrain",
    description: 'Ingrain',
  }
}

class Ailment extends Object {}

export default {
  Ailment,
  ailments: Object.keys(ailments).map((id) => {
    const model = new Ailment();

    model.id = id;
    Object.keys(ailments[id]).forEach((key) => {
      model[key] = ailments[id][key];
    })
    return model;
  }),
}
