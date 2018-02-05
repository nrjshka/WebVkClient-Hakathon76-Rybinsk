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
                    <div className="col-3">
                        <img src="static/media/icons/friends.png" />
                    </div>
                    <div className="col-3">
                        <img src="static/media/icons/groups.png" />
                    </div>
                    <div className="col-3">
                        <img src="static/media/icons/settings.png" />
                    </div>
                </div>
            </footer>
		);
	}
}
export default Footer