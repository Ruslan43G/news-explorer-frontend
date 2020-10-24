import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation'

export default function Header (props) {

  return (
      <section className='header header_theme_dark'>
          <Logo />
          <Navigation loggedIn={props.loggedIn} auth={props.auth}/>
      </section>
  )
}
