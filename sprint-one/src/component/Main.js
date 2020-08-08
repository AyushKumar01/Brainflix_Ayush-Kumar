import React from 'react';
import '../styles/app.css';
import view from '../assets/icons/png/views.png';
import like from '../assets/icons/png/likes.png';
import CommentForm from '../component/CommentForm';
import Comments from '../component/Comments';

function Main(props) {
    // console.log('video', props.mainVideo);
    return (
        <div className="main">
            <div className="main__content">
                <div className="main__title">
                    <h1 className="main__title-heading">{props.mainVideo.title}</h1>
                </div>
                <div className="main__channel">
                    <div className="main__channel-first">
                        <h3 className="main__channel-heading">{props.mainVideo.channel}</h3>
                        <span className="main__channel-date">{props.mainVideo.timestamp}</span>
                    </div>
                    <div className="main__channel-second">
                        <div className="main__channel-boxOne">
                        <img className="main__channel-fistBox-icon" src={view} alt="views" />
                        <span>{props.mainVideo.views}</span>
                        </div>
                        <div className="main__channel-boxTwo">
                        <img className="main__channel-fistBox-icon" src={like} alt="like" />
                        <span>{props.mainVideo.likes}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="main__description">{props.mainVideo.description}</p>
            </div>
            <CommentForm />
            {props.mainVideo.comments.map((comm) => (<Comments comment={comm} key={comm.id}/> ))}
        </div>
    );
}

export default Main;


