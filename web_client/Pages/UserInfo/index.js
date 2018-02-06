import React, { Component } from 'react';

class UserInfo extends Component {
     render(){
        let user_data = this.props.user_data.counters;
        let self = this.props.self;

        return(
            <div className="user-container user-stat row">
                <div className="col-3 ">
                    <div className="user-stat-digits">
                        <span className="user-stat-num">{user_data.friends}</span><br />
                        друзей
                    </div>
                </div>
                <div className="col-3">
                    <div className="user-stat-digits">
                        <span className="user-stat-num">{user_data.followers}</span><br />
                        подписчиков
                    </div>
                </div>
                {
                    (() => {
                        if (self){
                            return (
                                <div className="col-3">
                                    <div className="user-stat-digits">
                                        <span className="user-stat-num">{user_data.groups}</span><br />
                                        групп
                                    </div>
                                </div>
                            )
                        }else {
                            return(
                                <div className="col-3">
                                    <div className="user-stat-digits">
                                        <span className="user-stat-num">{user_data.pages}</span><br />
                                        страниц
                                    </div>
                                </div>
                            );
                        }
                    })()
                }
                {
                    (() => {
                        if (self){
                            return(
                                <div className="col-3">
                                    <div className="user-stat-digits user-stat-digist-hide">
                                        <span className="user-stat-num">{user_data.gifts}</span><br />
                                        подарков
                                    </div>
                                </div>
                            )
                        }else {
                            return(
                                <div className="col-3">
                                    <div className="user-stat-digits user-stat-digist-hide">
                                        <span className="user-stat-num">{user_data.albums}</span><br />
                                        альбомов
                                    </div>
                                </div>
                            )
                        }
                    })()
                }
            </div>
        );
     }
}

export default UserInfo;