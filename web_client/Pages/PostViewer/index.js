import React, { Component } from 'react';

class PostViewer extends Component {
     render(){
        let wall = this.props.data;

        let datePost = new Date();

        datePost = datePost.getDay(wall.date) + ':' + datePost.getMonth(wall.date) + ':' + datePost.getFullYear(wall.date);
        return(
            <div className="user-container">
                {datePost} <br />
                {wall.text}
            </div>
        );
     }
}

export default PostViewer;