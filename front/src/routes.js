import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/pokedex/:search" component={Pokedex} />
			</Switch>
		</BrowserRouter>
	)
}