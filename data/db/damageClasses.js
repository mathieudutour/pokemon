const data = {
  "1": {
    "identifier":"status",
    "description": "No damage",
  },
  "2": {
    "identifier":"physical",
    "description": "Physical damage, controlled by Attack and Defense",
  },
  "3": {
    "identifier":"special",
    "description": "Special damage, controlled by Special Attack and Special Defense",
  }
}


class DamageClass extends Object {}

export default {
  DamageClass,
  damageClasses: Object.keys(data).map((id) => {
    const model = new DamageClass();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
