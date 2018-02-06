import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { IndexRoute, BrowserRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Index from './Index/index.js';
import Footer from './Footer/index.js';
import Self from './Self/index.js';
import Settings from './Settings/index.js';

class App extends Component {
	render(){
		// Получаем данные от Вк
		let vkdata = JSON.parse(localStorage.getItem('vkdata'));
		
		if (!vkdata) {
			// Если мы не залогинились
			// TODO: Добавить страницу NotFounded
			return(
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Index} />
					</Switch>
				</BrowserRouter>
			);
		} else {
			// Если мы залогинились
			return(
			<BrowserRouter>
				<div className="main">
					<div className="content container row">
						<Switch>
							<Route exact path="/" component={Self} />
							<Route exact path="/settings" component={Settings} />
						</Switch>
					</div>
				<Footer />
				</div>
			</BrowserRouter>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return state;
}


export default connect(mapStateToProps)(App);