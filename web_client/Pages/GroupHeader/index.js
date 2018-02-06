import React, { Component } from 'react';
import {connect} from 'react-redux';

class GroupHeader extends Component {
	render(){     
        let user_data = this.props.group_data.response[0];
        
        return(
            <div className="user-container user-header row">
                <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                    <img className="user-header-foto" src={user_data.photo_big}/>
                </div>
                <div className="col-xs-6 col-sm-8 col-md-9 col-lg-10 row user-info">
                    <div className="user-article col-12 user-name">
                        {user_data.name}
                    </div>
                    {
                        (() => {
                            if (user_data.type == "page"){
                                return(
                                    <div className="user-article col-12 user-name">
                                        <span className="user-article-param group-article-header">Публичная страница</span>
                                    </div>
                                );
                            }else if (user_data.type == "group"){
                                return(
                                    <div className="user-article col-12 user-name">
                                        <span className="user-article-param group-article-header">Группа</span>
                                    </div>
                                );
                            }else {
                                return(
                                    <div className="user-article col-12 user-name">
                                        <span className="user-article-param group-article-header">Мероприятие</span>
                                    </div>
                                );
                            }
                        })()
                    }
                </div>
            </div>
		);
	}
}

export default GroupHeader;