import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation'

export default function Header (props) {

  const [mobileMenuOpened, setmobileMenuOpened] = React.useState(false);

  function toggleMenu () {
    setmobileMenuOpened(!mobileMenuOpened);
  }

  return (
      <header className={`header ${mobileMenuOpened ? 'header_mobile-opened' : ''} ${props.loginPopup && mobileMenuOpened ? 'header_transparent' : ''} ${props.theme ? 'header_theme_light' : 'header_theme_dark'}`}>
        <Link className='header__link' to='/'><Logo open={mobileMenuOpened}/></Link>
        <button type='button' onClick={toggleMenu} className={`header__mobile-menu ${props.theme ? 'header__mobile-menu_black' : ''} ${mobileMenuOpened ? 'header__mobile-menu_close' : ''}`}></button>
        <Navigation open={mobileMenuOpened} setMenu={toggleMenu} theme={props.theme} loggedIn={props.loggedIn} auth={props.auth} openLogin={props.openLogin}/>
      </header>
  )
}
