import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UserHeader from '../UserHeader/index.js';
import UserInfo from '../UserInfo/index.js';
import UserWall from '../UserWall/index.js';
import Preloader from '../Preloader/index.js';

import {vkGetUserInfo} from '../../Redux/Actions/vk';

class Self extends Component {
    constructor(props){
        super(props);

        // Задаем параметры
        let vkdata = JSON.parse(localStorage.getItem('vkdata'));

        this.state = {
            fetched : false,
            vkdata : vkdata,
            user_info : null,
        };
        
        // Вызываем загрузку данных
        this.props.vkGetUserInfo(vkdata.session.user.id);
    }	

    componentWillReceiveProps(newProps){
        console.log(newProps);
        if (newProps.vk.user_info){
            this.setState({
                fetched : true,
                vkdata : this.state.vkdata,
                user_info : newProps.vk.user_info
            });
        }
    }
    
    render(){
        if (this.state.fetched) {
            return(
                <div className="self-main">
                    <UserHeader user_data={this.state.user_info} />
                    <UserInfo user_data={this.state.user_info} />
                    <UserWall user_data={this.state.user_info} />
                </div>
            );
        } else {
            return (
                <Preloader />
            )
        }
	}
}

const mapStateToProps = (state) => {
	return state;
}

const matchDispatchToProps = (dispatch) => {
	return {
		vkGetUserInfo: bindActionCreators(vkGetUserInfo, dispatch), 
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(Self);