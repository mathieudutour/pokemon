const data = {
  "1": {
    "identifier":"female"
  },
  "2": {
    "identifier":"male"
  },
  "3": {
    "identifier":"genderless"
  }
};

class Gender extends Object {}

export default {
  Gender,
  genders: Object.keys(data).map((id) => {
    const model = new Gender();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
