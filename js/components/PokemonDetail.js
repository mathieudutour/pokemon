import 'babel/polyfill';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon Detail</h1>
        <ul>
          <li>{this.props.pokemon.name}</li>
          <li>{this.props.pokemon.identifier}</li>
          <li>{this.props.pokemon.genus}</li>
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    pokemon: () => Relay.QL`
      fragment on Pokemon {
        name,
        identifier,
        genus
      }
    `,
  },
});
