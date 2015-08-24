import 'babel/polyfill';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>See pokemons</h1>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {},
});
