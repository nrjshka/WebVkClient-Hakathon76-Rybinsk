import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';

import Preloader from '../Preloader/index.js';

import {vkGetFriendsList} from '../../Redux/Actions/vk';

class FriendsList extends Component {
    constructor(props){
        super(props);

        // Задаем параметры
        let vkdata = JSON.parse(localStorage.getItem('vkdata'));

        this.state = {
            fetched : false,
            vkdata : vkdata,
            friends_data : null,
        };
        
        this.props.vkGetFriendsList(vkdata.session.user.id);
    }   
    
    componentWillReceiveProps(newProps){
        if (newProps.vk.friends_data){
            // Пришли данные групп
            this.setState({
                fetched: true,
                vkdata : this.state.vkdata,
                friends_data : newProps.vk.friends_data,
            });
        }
    }

    render(){
        if (!this.state.fetched){        
            // Если информация еще не пришла, тогда грузим прелоадер
            return(
                <Preloader />
            );
        }else {
            // Если мы уже загрузили информацию

            let friendsArray = [];

            for(let i = 0; i < this.state.friends_data.length; i++){
                let friend = this.state.friends_data[i];
                friendsArray.push(
                    <Link to={"/id" + friend.user_id} className="friends-container row col-sm-12 col-md-6" key={i.toString()}>
                        <div className="col-3 ">
                            <img className="friends-img" src={friend.photo_200_orig} />
                        </div>
                        <div className="col-9">
                            <div className="friends-title">
                                {friend.first_name} {friend.last_name}
                            </div>                        
                        </div>
                    </Link>
                );
            }

            return(
                <div className="friends-main row">
                   {friendsArray}
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
        vkGetFriendsList : bindActionCreators(vkGetFriendsList, dispatch), 
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(FriendsList);