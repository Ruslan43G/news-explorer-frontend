import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation'

export default function Header (props) {

  return (
      <header className={`header ${props.theme ? 'header_theme_light' : 'header_theme_dark'}`}>
          <Link className='header__link' to='/'><Logo /></Link>
          <Navigation theme={props.theme} loggedIn={props.loggedIn} auth={props.auth}/>
      </header>
  )
}
