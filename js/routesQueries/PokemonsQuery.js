export default {
  pokemons: (Component) => Relay.QL`
    query {
      pokemons(first: $first) {
        ${Component.getFragment('pokemons')},
      },
    }
  `,
};
