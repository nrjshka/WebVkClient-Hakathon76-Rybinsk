import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UserHeader from '../UserHeader/index.js';
import UserInfo from '../UserInfo/index.js';
import UserWall from '../UserWall/index.js';
import Preloader from '../Preloader/index.js';

import {vkGetUserInfo, vkPostData} from '../../Redux/Actions/vk';

class Self extends Component {
    constructor(props){
        super(props);

        // Задаем параметры
        let vkdata = JSON.parse(localStorage.getItem('vkdata'));

        this.state = {
            fetched : false,
            vkdata : vkdata,
            user_info : null,
            input_text : "",
        };
        
        // Вызываем загрузку данных
        this.props.vkGetUserInfo(vkdata.session.user.id);
    }	

    componentWillReceiveProps(newProps){
        if (newProps.vk.user_info){
            this.setState({
                fetched : true,
                vkdata : this.state.vkdata,
                user_info : newProps.vk.user_info,
                input_text : "",
            });
        }
    }

    render(){
        if (this.state.fetched) {
            return(
                <div className="self-main">
                    <UserHeader user_data={this.state.user_info} />
                    <UserInfo user_data={this.state.user_info} self={true}/>
                    <div className="user-container post-box" >
                        <textarea className="post-box-area" type="text" placeholder="Введите текст поста" value={this.state.input_text}
                            onChange={
                                (evt) => {
                                    this.setState({
                                        fetched : true,
                                        vkdata : this.state.vkdata,
                                        user_info : this.state.user_info,
                                        input_text : evt.target.value,
                                    })
                                }
                            }>
                        </textarea>
                        <input className="post-send" value="Отправить" type="button" 
                            onClick={(evt) => {
                                // Тут отправляем запрос на создание поста  
                                this.props.vkPostData(this.state.vkdata.session.user.id, this.state.input_text);
                            }}/>
                    </div>
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
        vkPostData : bindActionCreators(vkPostData, dispatch),
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(Self);