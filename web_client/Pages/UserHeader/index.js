import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserHeader extends Component {
	render(){     
        let user_data = this.props.user_data;
        
        return(
            <div className="user-header row">
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <img className="user-header-foto" src={user_data.photo_max}/>
                </div>
                <div className="col-xs-6 col-sm-8 col-md-9 col-lg-10">
                    {user_data.first_name}<br />
                    {user_data.last_name}
                </div>
            </div>
		);
	}
}

export default UserHeader;