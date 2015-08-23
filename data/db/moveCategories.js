const data = {
  "0": {
    "identifier":"damage",
    description: 'Inflicts damage',
  },
  "1": {
    "identifier":"ailment",
    description: 'No damage; inflicts status ailment',
  },
  "2": {
    "identifier":"net-good-stats",
    description: 'No damage; lowers target\'s stats or raises user\'s stats',
  },
  "3": {
    "identifier":"heal",
    description: 'No damage; heals the user',
  },
  "4": {
    "identifier":"damage+ailment",
    description: 'Inflicts damage; inflicts status ailment',
  },
  "5": {
    "identifier":"swagger",
    description: 'No damage; inflicts status ailment; raises target\'s stats',
  },
  "6": {
    "identifier":"damage+lower",
    description: 'Inflicts damage; lowers target\'s stats',
  },
  "7": {
    "identifier":"damage+raise",
    description: 'Inflicts damage; raises user\'s stats',
  },
  "8": {
    "identifier":"damage+heal",
    description: 'Inflicts damage; absorbs damage done to heal the user',
  },
  "9": {
    "identifier":"ohko",
    description: 'One-hit KO',
  },
  "10": {
    "identifier":"whole-field-effect",
    description: 'Effect on the whole field',
  },
  "11": {
    "identifier":"field-effect",
    description: 'Effect on one side of the field',
  },
  "12": {
    "identifier":"force-switch",
    description: 'Forces target to switch out',
  },
  "13": {
    "identifier":"unique",
    description: 'Unique effect',
  }
};

class MoveCategory extends Object {}

export default {
  MoveCategory,
  moveCategories: Object.keys(data).map((id) => {
    const model = new MoveCategory();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
