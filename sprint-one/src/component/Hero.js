import React from 'react';
import '../styles/app.css';

function Hero() {
    return (
        <section className="hero">
         <div className="hero__image">
           <video className="hero__controller" controls>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
           </video>
         </div>
        </section>
    );
  }
  
  export default Hero;