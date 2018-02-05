import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserWall extends Component {
     render(){
        let wall = this.props.user_data.wall;

        return(
            <div className="col-12 user-wall">
                {
                    (() => {
                        console.log(wall);
                        let wallArray = [];
                        // Прогоняем весь массив со стеной 
                        for(let i = 0; i <= wall[0]; i++){
                            wallArray.push(
                                <div className="user-container">
                                    {wall[i].text}
                                </div>
                            );
                        }

                        return wallArray
                    })()
                }
            </div>
        );
     }
}

const mapStateToProps = (state) => {
	return state;
}

const matchDispatchToProps = (dispatch) => {
	return {
		// vkGetUserInfo: bindActionCreators(vkGetUserInfo, dispatch), 
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(UserWall);