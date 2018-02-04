import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { IndexRoute, BrowserRouter} from 'react-router-dom';

import Index from './Index';
import Message from './Messages';


class App extends Component {
	render(){
		return(
				<BrowserRouter>
					<Switch>
					    <Route exact path="/" component={Index} />
					</Switch>
				</BrowserRouter>
		);
	}
}

export default App