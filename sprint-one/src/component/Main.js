import React from 'react';
import '../styles/app.css';
import view from '../assets/icons/png/views.png';
import like from '../assets/icons/png/likes.png';
import CommentForm from '../component/CommentForm';
import Comments from '../component/Comments';

function Main() {
    return (
        <div className="main">
            <div className="main__content">
                <div className="main__title">
                    <h1 className="main__title-heading">BMX Rampage: 2018 Highlights</h1>
                </div>
                <div className="main__channel">
                    <div className="main__channel-first">
                        <h3 className="main__channel-heading">By Red Cow</h3>
                        <span className="main__channel-date">12/18/2018</span>
                    </div>
                    <div className="main__channel-second">
                        <div className="main__channel-boxOne">
                        <img className="main__channel-fistBox-icon" src={view} alt="views" />
                        <span>1,001,023</span>
                        </div>
                        <div className="main__channel-boxTwo">
                        <img className="main__channel-fistBox-icon" src={like} alt="like" />
                        <span>110,985</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <p className="main__description">   
                On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what is
                possible on two wheels, unleashing some of the
                biggest moments the sport has ever seen. While
                mother nature only allowed for one full run before
                the conditions made it impossible to ride, that was
                all that was needed for event veteran Kyle Strait,
                who won the event for the second time -- eight years
                after his first Red Cow Rampage title
            </p>
            </div>
            <CommentForm />
            <Comments />
        </div>
    );
}

export default Main;


