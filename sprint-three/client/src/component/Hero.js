import React, { Component } from 'react';
import '../styles/app.css';
import play from '../assets/icons/png/play.png';
import fullscreen from '../assets/icons/png/fullscreen.png';
import volume from '../assets/icons/png/volume.png';
import pause from '../assets/icons/png/pause.png';
import mute from '../assets/icons/png/mute.png';

// import videoSrc from '../assets/video/keyboardcat.mp4';



//=============still working on it==============
//=============still working on it==============
//===========please ignore the comments ========
class Hero extends Component {
    videoPlayer = React.createRef();
    videoPlayerTime = React.createRef();

    state = {
        play: true,
        videoTime: "00:00",
        mute: false,
        duration: "00:00"
      };

    componentDidMount() {
        console.log("did mount");
        this.videoPlayer.current.addEventListener('timeupdate', this.videoPlaying);
    }

    currentTime(time) {
        let sec_num = parseInt(time, 10);
          let hours = Math.floor(sec_num / 3600);
          let minutes = Math.floor((sec_num - hours * 3600) / 60);
          let seconds = sec_num - hours * 3600 - minutes * 60;
    
          if (hours < 10) {
            hours = "0" + hours;
          }
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
    
          if(hours > 0){
            return hours + ":" + minutes + ":" + seconds;
          }else{
            return minutes + ":" + seconds;
          }
    }

    videoPlaying = (event) => {
        // console.log("target duration -> " + event.target.duration);
        // console.log("target currentTime -> " + event.target.currentTime);

        let videoTimeElapsed = 0;
        const videoLength = isNaN(event.target.duration) === false ? event.target.duration : 0;

        videoTimeElapsed = event.target.currentTime;

        this.setState({ duration: this.currentTime(videoLength), videoTime : this.currentTime(videoTimeElapsed) });

        const ratio = videoTimeElapsed / videoLength;
        const fraction = ratio - Math.floor(ratio);
        const percentage = 99 * fraction;

        // const percentageTrimmed = percentage.toFixed(0);

        // this.videoPlayerTime.current.innerText = `${percentageTrimmed} seconds`;

        // update CSS variable
        document.documentElement.style.setProperty('--vid-progress', percentage.toFixed(2) + '%');

        if(videoTimeElapsed === videoLength){
            this.setState({ play : true });
        }
    };

    componentDidUpdate() {
        // console.log('component did update');
        // console.log(this.videoPlayer.current.currentTime);
    }

    componentWillUnmount() {
        this.videoPlayer.current.removeEventListener('timeupdate', this.videoPlaying);
    }    
  
    videoPlayerClickHandler = () => {
        if (this.videoPlayer.current.paused) {
            this.setState({ play : false });
            this.videoPlayer.current.play();
        } else {
            this.videoPlayer.current.pause();
            this.setState({ play : true });
        }
    };

    videoPlayerScreenClickHandler = () => {
        const vidPlayer = this.videoPlayer.current;

        if (vidPlayer.requestFullscreen) {
            vidPlayer.requestFullscreen();
        }
    }

    videoPlayerVolumeClickHandler = () => {
        console.log(this.videoPlayer.current);
        if(this.videoPlayer.current.muted){
            this.setState({ mute : false });
            this.videoPlayer.current.muted = false;
        }else{
            this.setState({ mute : true });
            this.videoPlayer.current.muted = true;
        }
    }

    // gotoVidTime = (time) => {
    //     this.videoPlayer.current.currentTime = time;
    // };

    render(){
        // const { duration, image, video } = this.props.mainVideo;
        const { image, video } = this.props.mainVideo;
        
        return (
            <section className='hero' >
                <div className='hero__wrapper'>
                    <button className='hero__play' onClick={this.videoPlayerClickHandler}>
                        <img src={this.state.play === true ? play : pause} alt="play"/>
                    </button>
                    <div className='hero__progress-bar'>
                        <div className='hero__progress-timeline'></div>
                        <time className="hero__progress-text" 
                              ref={this.videoPlayerTime}> 
                              {this.state.videoTime} / {this.state.duration}
                        </time>
                    </div>
                    <div className='hero__btn-group'>    
                        <button className='hero__btn-item hero__fullscreen' 
                                onClick={this.videoPlayerScreenClickHandler}>
                                <img src={fullscreen} alt="fullscreen"/>
                        </button>
                        <button className='hero__btn-item hero__volume'>
                                <img className='hero__volumeImage' 
                                src={this.state.mute === true ? mute : volume} alt="volume" 
                                onClick={this.videoPlayerVolumeClickHandler}/>
                        </button>
                    </div>
                </div>
                <video className='hero__video' 
                    poster={image} 
                    ref={this.videoPlayer} 
                    src={video} 
                    onClick={this.videoPlayerClickHandler}>
                </video>
            </section>
        );
    }
}

  
export default Hero;

