import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserHeader extends Component {
	render(){     
        let user_data = this.props.user_data;
        
        return(
            <div className="user-container user-header row">
                <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                    <img className="user-header-foto" src={user_data.photo_max}/>
                </div>
                <div className="col-xs-6 col-sm-8 col-md-9 col-lg-10 row user-info">
                    <div className="user-article col-12 user-name">
                        {user_data.first_name} {user_data.last_name}
                    </div>
                    {
                        // Вызываем вывод даты рождения
                        (() => {
                            if (user_data.bdate){
                                return (
                                    <div className="user-article col-12">
                                        <span className="user-article-param">Дата рождения: </span>{user_data.bdate}
                                    </div>
                                )
                            }
                        })()
                    }
                    {
                        // Вызываем вывод города
                        (() => {
                            console.log(user_data);
                            if (user_data.city){
                                return (
                                    <div className="user-article col-12">
                                        <span className="user-article-param">Город:</span> {user_data.city}
                                    </div>
                                )
                            }
                        })()
                    }
                </div>
            </div>
		);
	}
}

export default UserHeader;