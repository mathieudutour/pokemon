const data = {
  "1": {
    "identifier":"level-up",
    "description": "Level up"
  },
  "2": {
    "identifier":"trade",
    "description": "Trade"
  },
  "3": {
    "identifier":"use-item",
    "description": "Use item"
  },
  "4": {
    "identifier":"shed",
    "description": "Shed"
  }
}

class EvolutionType extends Object {}

export default {
  EvolutionType,
  evolutionTypes: Object.keys(data).map((id) => {
    const model = new EvolutionType();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
