import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UserHeader from '../UserHeader/index.js';
import UserInfo from '../UserInfo/index.js';
import UserWall from '../UserWall/index.js';
import Preloader from '../Preloader/index.js';

import {vkGetUserInfo} from '../../Redux/Actions/vk';

class UserPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            fetched : false,
            user_info : null,
        };
        
        // Вызываем загрузку данных
        this.props.vkGetUserInfo(this.props.match.params.user_id);
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
            console.log(this.state.user_info);
            return(
                <div className="self-main">
                    <UserHeader user_data={this.state.user_info} />
                    <UserInfo user_data={this.state.user_info} self={false}/>
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

export default connect(mapStateToProps, matchDispatchToProps)(UserPage);