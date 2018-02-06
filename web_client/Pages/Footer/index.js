import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, BrowserRouter } from 'react-router-dom';

class Footer extends Component {
	render(){
		return(
            <footer className="page-footer col-12">
                <div className="row container col-12">
                    <Link to="" className="col-3">
                        <img src="static/media/icons/home.png" />
                    </Link>
                    <Link to="/friends" className="col-3">
                        <img src="static/media/icons/friends.png" />
                    </Link>
                    <Link to="/groups" className="col-3">
                        <img src="static/media/icons/groups.png" />
                    </Link>
                    <Link to="/settings" className="col-3">
                        <img src="static/media/icons/settings.png" />
                    </Link>
                </div>
            </footer>
		);
	}
}
export default Footer