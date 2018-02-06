import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {vkLogin} from '../../Redux/Actions/vk';

class Index extends Component {
	render(){
		return(
			<div className="index-main">
				<form className="index-form col-xs-12 row">
					<div className="col-12">
						<img className="index-logo" src="static/media/logo/index.png"/>
						<div className="index-title">VkQuickAnalyzer</div>
						<input className="index-input" type="button" onClick={ () => { this.props.vkLogin() } } value="Зайти с помощью VK" />
					</div>
				</form>
				<footer className="index-footer">
					Rybinsk Hakathon, 2018
				</footer>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

const matchDispatchToProps = (dispatch) => {
	return {
		vkLogin: bindActionCreators(vkLogin, dispatch), 
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(Index);