import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import GroupHeader from '../GroupHeader/index.js';
import GroupWall from '../GroupWall/index.js';
import Preloader from '../Preloader/index.js';

import {vkGetGroupInfo} from '../../Redux/Actions/vk';

class Group extends Component {
    constructor(props){
        super(props);

        // Задаем параметры
        let vkdata = JSON.parse(localStorage.getItem('vkdata'));

        this.state = {
            fetched : false,
            vkdata : vkdata,
            group_info : null,
        };
        
        // Вызываем загрузку данных
        this.props.vkGetGroupInfo(this.props.match.params.group_id);
    }	

    componentWillReceiveProps(newProps){
        if (newProps.vk.group_data){
            this.setState({
                fetched : true,
                vkdata : this.state.vkdata,
                group_data : newProps.vk.group_data,
            });
        }
    }
    
    render(){
        if (!this.state.fetched) {
            return (
                <Preloader />
            )
        } else {
            return (
                <div className="group-main">
                    <GroupHeader group_data={this.state.group_data} />
                    <GroupWall group_data={this.state.group_data} />
                </div>
            )
        }
	}
}

const mapStateToProps = (state) => {
	return state;
}

const matchDispatchToProps = (dispatch) => {
	return {
		vkGetGroupInfo: bindActionCreators(vkGetGroupInfo, dispatch), 
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(Group);