import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

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

        let mediaArray = [];
        if (wall.attachments){
            for(let i = 0; i < wall.attachments.length; i++){
                console.log(i);
                switch (wall.attachments[i].type){
                    case "photo":
                            mediaArray.push(
                                <div className="post-media post-img">
                                    <img src={wall.attachments[i].photo.src_big} key={i.toString()} />
                                </div>
                            )
                        break;
                    case "link":
                            mediaArray.push(
                                <div className="post-media">
                                    <a href={wall.attachments[i].link.url}>{wall.attachments[i].link.title}</a>
                                </div>
                            )
                        break;
                    case "video":
                            mediaArray.push(
                                <div className="post-media" key={i.toString()}>
                                    <a className="post-video" href={'https://vk.com/video?z=video' 
                                            + wall.attachments[i].video.owner_id + '_' + wall.attachments[i].video.vid}>
                                        <img src={wall.attachments[i].video.image} key={i.toString()} />
                                    </a>
                                </div>
                            );
                        break;
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
                {mediaArray}
            </div>
        );
     }
}

export default PostViewer;