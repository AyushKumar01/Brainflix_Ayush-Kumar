import React from 'react';
import '../styles/app.css';
import play from '../assets/icons/png/play.png';
import fullscreen from '../assets/icons/png/fullscreen.png';
import volume from '../assets/icons/png/volume.png';
// import view from '../assets/icons/png/views.png';
// import like from '../assets/icons/png/likes.png';
// import CommentForm from '../component/CommentForm';
// import Comments from '../component/Comments';

function Hero(props) {
    // console.log('video', props.mainVideo);
    return (
        // <div className="hero">
        //    <video className="hero__controller" poster="/images/video-list-0.jpg"></video>
        // </div>
        //  controls
        <div className="wrapper">
            <section className="hero">
                <div className="hero__controls">
                    <button className="hero__btn hero__btn-play"><img src={play} alt="play"/></button>
                    <div className="hero__progress-bar">
                        <div className="hero__progress-timeline">
                            <div className="hero__progress-scrubber"></div>
                        </div>
                    <div className="hero__progress-text">{props.mainVideo.duration}</div>
                    </div>
                    <div className="hero__btn-group">
                        <button className="hero__btn hero__btn-fullscreen"><img src={fullscreen} alt="fullscreen"/></button>
                        <button className="hero__btn hero__btn-volume"><img src={volume} alt="volume"/></button>
                    </div>
                </div>
                <video poster={props.mainVideo.image} className="hero__video"></video>
            </section>
        </div>
       
    );
  }
  
  export default Hero;