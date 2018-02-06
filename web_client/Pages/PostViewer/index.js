import React, { Component } from 'react';

class PostViewer extends Component {
    htmlTextReturner(text){
        return {
            __html : text
        };
    }

     render(){

        let wall = this.props.data;

        let datePost = new Date(wall.date * 1000);
        datePost = (datePost.getDate())  + '.' + (datePost.getMonth() + 1) + '.' + datePost.getFullYear();

        let photoArray = [];
        if (wall.attachments){
            for(let i = 0; i < wall.attachments.length; i++){
                console.log(i);
                if (wall.attachments[i].type == "photo"){
                    console.log(wall.attachments[i]);
                    photoArray.push(<img src={wall.attachments[i].photo.src_big} key={i.toString()} />)
                }
            }
        }

        return(
            <div className="user-container post-container">
                <div className="post-date">
                    {datePost} 
                </div>
                <div className="post-text" dangerouslySetInnerHTML={this.htmlTextReturner(wall.text)}>
                </div>
                {photoArray}
            </div>
        );
     }
}

export default PostViewer;