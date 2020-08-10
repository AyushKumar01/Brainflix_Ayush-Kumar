import React from 'react';
import '../styles/app.css';
import play from '../assets/icons/png/play.png';
import fullscreen from '../assets/icons/png/fullscreen.png';
import volume from '../assets/icons/png/volume.png';

function Hero(props) {
    // console.log('video', props.mainVideo);
    return (
        <section className='hero' >
            <div className='hero__wrapper'>
                <button className='hero__play'><img src={play} alt="play" /></button>
                <div className='hero__progress-bar'>
                    <div className='hero__progress-timeline'></div>
                    <div className='hero__progress-text'>{props.mainVideo.duration}</div>
                </div>
                <div className='hero__btn-group'>    
                    <button className='hero__btn-item hero__btn-item-one'><img src={fullscreen} alt="fullscreen" /></button>
                    <button className='hero__btn-item hero__btn-item-two'><img src={volume} alt="volume" /></button>
                </div>
            </div>
            <video className='hero__video' poster={props.mainVideo.image}>
            </video>
        </section>
    );
  }
  
  export default Hero;

