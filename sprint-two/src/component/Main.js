import React from 'react';
import view from '../assets/icons/png/views.png';
import like from '../assets/icons/png/likes.png';
import CommentForm from '../component/CommentForm';
import Comments from '../component/Comments';
import { format } from 'timeago.js';

function Main(props) {
    const { title, channel, timestamp, comments, views, likes, description } = props.mainVideo;
    const timeStamp = format(new Date(timestamp));
    const commentsNew = comments;
    if(commentsNew){
        commentsNew.sort(function(a, b){ return b.timestamp - a.timestamp });
    }

    return (
        <div className="main">
            <div className="main__content">
                <div className="main__title">
                    <h1 className="main__title-heading">{title}</h1>
                </div>
                <div className="main__channel">
                    <div className="main__channel-name">
                        <h3 className="main__channel-heading">{channel}</h3>
                        <span className="main__channel-date">{timeStamp}</span>
                    </div>
                    <div className="main__channel-count">
                        <div className="main__channel-views">
                            <img className="main__channel-views-icon" src={view} alt="views" />
                            <span>{views}</span>
                        </div>
                        <div className="main__channel-likes">
                            <img className="main__channel-likes-icon" src={like} alt="likes" />
                            <span>{likes}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div><p className="main__description">{description}</p></div>
            <CommentForm comments={comments} handleCommentSubmit={props.handleCommentSubmit}/>
            {commentsNew && commentsNew.map((element) => (<Comments review={element} key={element.id}/> ))}
        </div>
    );
}

export default Main;


