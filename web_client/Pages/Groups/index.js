import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';

import Preloader from '../Preloader/index.js';

import {vkGetGroupList} from '../../Redux/Actions/vk';

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
        
        this.props.vkGetGroupList(vkdata.session.user.id);
    }   
    
    componentWillReceiveProps(newProps){
        if (newProps.vk.group_info){
            // Пришли данные групп
            this.setState({
                fetched: true,
                vkdata : this.state.vkdata,
                groups_data : newProps.vk.group_info,
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

            let groupArray = [];
            
            for(let i = 1; i < this.state.groups_data[0]; i++){
                let group = this.state.groups_data[i];
                groupArray.push(
                    <Link to={"/group" + group.gid} className="group-container row col-sm-12 col-md-6" key={i.toString()}>
                        <div className="col-3 ">
                            <img className="group-img" src={group.photo_big} />
                        </div>
                        <div className="col-9">
                            <div className="group-title">
                                {group.name}
                            </div>                        
                        </div>
                    </Link>
                );
            }

            return(
                <div className="groups-main row">
                   {groupArray}
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
        vkGetGroupList : bindActionCreators(vkGetGroupList, dispatch), 
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(Groups);