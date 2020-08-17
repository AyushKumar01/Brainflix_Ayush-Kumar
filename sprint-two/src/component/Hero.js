import React from 'react';
import '../styles/app.css';
import play from '../assets/icons/png/play.png';
import fullscreen from '../assets/icons/png/fullscreen.png';
import volume from '../assets/icons/png/volume.png';
// import pause from '../assets/icons/png/pause.png';
// import video from '../assets/video/brainStation.mp4';


// =============still-working-on-it-please-ignore-extra-stuff=================
function Hero(props) {
    const { duration, image } = props.mainVideo;
    // props.myVideo = React.createRef();
    //console.log('video', props.mainVideo);
    return (
        <section className='hero' >
            <div className='hero__wrapper'>
                <button className='hero__play'><img src={play} alt="play" /></button>
                {/* onClick={() => {
                    props.myVideo.current.play();
                }}
                <button className='hero__pause'><img src={pause} alt="play" /></button>
                onClick={() => {
                    props.myVideo.current.pause();
                }}  */}
                <div className='hero__progress-bar'>
                    <div className='hero__progress-timeline'></div>
                    <div className='hero__progress-text'>0:00 / {duration}</div>
                </div>
                <div className='hero__btn-group'>    
                    <button className='hero__btn-item hero__fullscreen'><img src={fullscreen} alt="fullscreen" /></button>
                    <button className='hero__btn-item hero__volume'><img src={volume} alt="volume" /></button>
                </div>
            </div>
            <video ref={props.myVideo} className='hero__video' poster={image}>
            </video>
        </section>
    );
  }
  
  export default Hero;

