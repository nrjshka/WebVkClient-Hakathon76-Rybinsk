import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { IndexRoute, BrowserRouter} from 'react-router-dom';



class Index extends Component {
	render(){
		console.log('Index');
		return(
			<form className="col-xs-12">
				<img src="../media/index.png"/>
				<div className="form-title">VK Messanger</div>
			</form>
		);
	}
}

export default Index