import React from 'react';
import '../styles/app.css';
import logo from '../assets/logo/logo-brainflix.png';
// import font-awesome from 'font-awesome';

function Header() {
    return (
        <header className="header">
          <img className="header__logo" src={logo} alt="logo"/>
          <div className="header__mid">
            <form className="header__form">
              <span><i className="fa fa-search"></i></span>
              <input type="text" name="search"  placeholder="Search..."/>
            </form>
            <div className="header__right">
              <button className="header__right-btn"><span className="header__right-plus">+</span> UPLOAD</button>
              <div className="header__right-image"></div>
            </div>
          </div>
        </header>
    );
  }
  
  export default Header;