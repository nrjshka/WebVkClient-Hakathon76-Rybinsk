import React, { Component } from 'react';

class Preloader extends Component {
	render(){
		return(
            <div className="preloader">
                <img src="static/media/preloader/preloader.gif"/>
            </div>
        );
	}
}

export default Preloader;