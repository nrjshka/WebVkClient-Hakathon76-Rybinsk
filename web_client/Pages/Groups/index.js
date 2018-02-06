import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Preloader from '../Preloader/index.js';

class Groups extends Component {
    constructor(props){
        super(props);

        // Задаем параметры
        let vkdata = JSON.parse(localStorage.getItem('vkdata'));

        this.state = {
            fetched : false,
            vkdata : vkdata,
            groups_data : null,
        };
        
        
    }   
    
    render(){
        if (!this.state.fetched){        
            // Если информация еще не пришла, тогда грузим прелоадер
            return(
                <Preloader />
            );
        }
	}
}

const mapStateToProps = (state) => {
	return state;
}

const matchDispatchToProps = (dispatch) => {
	return {
		// vkGetUserInfo: bindActionCreators(vkGetUserInfo, dispatch), 
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(Groups);