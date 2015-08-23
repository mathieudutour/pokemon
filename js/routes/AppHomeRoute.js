export default class extends Relay.Route {
  static path = '/';
  static queries = {
    pokemons: (Component) => Relay.QL`
      query {
        pokemons(ids: $pokemonIds) {
          ${Component.getFragment('pokemons')},
        },
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
