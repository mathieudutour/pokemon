export default {
  pokemon: (Component) => Relay.QL`
    query {
      pokemon(id: $id) {
        ${Component.getFragment('pokemon')},
      },
    }
  `,
};
