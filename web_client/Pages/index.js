import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { IndexRoute, BrowserRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Index from './Index/index.js';
import Footer from './Footer/index.js';
import Self from './Self/index.js';
import Settings from './Settings/index.js';
import Groups from './Groups/index.js';
import Group from './Group/index.js';
import FriendsList from './FriendsList/index.js';
import UserPage from './UserPage/index.js';

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
							<Route exact path="/groups" component={Groups} />
							<Route path="/group:group_id" component={Group} />
							<Route exact path="/friends" component={FriendsList} />
							<Route path="/id:user_id" component={UserPage} />
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