import 'babel/polyfill';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon list</h1>
        <ul>
          {this.props.pokemons.map(pokemon =>
            <li>{pokemon.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    pokemons: () => Relay.QL`
      fragment on Pokemon @relay(plural: true) {
        name,
        identifier,
        genus
      }
    `,
  },
});
