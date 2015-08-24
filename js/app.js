import {Router, Route} from 'react-router';
import { history } from 'react-router/lib/HashHistory';
// A wrapper to create a Relay container
function createRelayContainer(Component, props) {
  if (Relay.isContainer(Component)) {
    // Construct the RelayQueryConfig from the route and the router props.
    var {name, queries} = props.route;
    var {params} = props;
    var {query} = props;
    params = Object.assign(params, query);
    return (
      <Relay.RootContainer
        Component={Component}
        renderFetched={(data) => <Component {...props} {...data} />}
        route={{name, params, queries}}
      />
    );
  } else {
    return <Component {...props}/>;
  }
}

import App from './components/App';
import AppHomeQuery from './routesQueries/AppHomeQuery';
import Pokemons from './components/Pokemons';
import PokemonsQuery from './routesQueries/PokemonsQuery';
import PokemonDetail from './components/PokemonDetail';
import PokemonQuery from './routesQueries/PokemonQuery';

React.render(
  <Router
    history={history}
    createElement={createRelayContainer}>
    <Route>
      <Route
        name="home" // added a name to the route
        path="/"
        component={App}
        queries={AppHomeQuery} // and the query
      />
      <Route
        name="pokemons" // added a name to the route
        path="/pokemons"
        component={Pokemons}
        queries={PokemonsQuery} // and the query
      />
      <Route
        name="pokemon"
        path="/pokemons/:id"
        component={PokemonDetail}
        queries={PokemonQuery}
      />
    </Route>
  </Router>,
  document.getElementById('root')
);
