import React from 'react';
import '../styles/app.css';
import logo from '../assets/logo/logo-brainflix.png';
import search from '../assets/icons/png/search.png';
import { Link } from 'react-router-dom'
import upload from '../assets/icons/png/upload.png';

function Header() {
    return (
        <header className="header">
          <div className="header__logo">
              <Link to="/"><img className="header__logo-image" src={logo} alt="logo"/></Link>
          </div>
          <div className="header__half">
            <form className="header__form">
              <label htmlFor="header__form-input" className="header__form-label">
                <img src={search} alt="search" />
              </label>
              <input className="header__form-input" type="text" name="search"  placeholder="Search.."/>
            </form>
            <div className="header__right">
              <img className="header__right-plus" src={upload} alt="upload"/>
              <Link to="/Upload" className="header__right-btn-link"><button className="header__right-btn">UPLOAD</button></Link>
              <div className="header__right-image"></div>
            </div>
          </div>
        </header>
    );
  }
  
  export default Header;