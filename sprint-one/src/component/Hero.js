import React from 'react';
import '../styles/app.css';
// import view from '../assets/icons/png/views.png';
// import like from '../assets/icons/png/likes.png';
// import CommentForm from '../component/CommentForm';
// import Comments from '../component/Comments';

function Hero() {
    return (
        <section className="hero">
           <video className="hero__controller" poster="/images/video-list-0.jpg" controls></video>
        </section>
       
    );
  }
  
  export default Hero;