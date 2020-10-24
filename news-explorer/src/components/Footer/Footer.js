import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import github from '../../images/Footer/github.svg';
import facebook from '../../images/Footer/facebook.svg';

export default function Footer (props) {

  return (
    <footer className='footer'>
      <small className='footer__copyright'>© 2020 Supersite, Powered by News API</small>
      <nav className='footer__nav'>
        <ul className='footer__list'>
          <li className='footer__list-item'><Link to="/" className='footer__link'>Главная</Link></li>
          <li className='footer__list-item'><Link to="/" className='footer__link'>Яндекс.Практикум</Link></li>
          <li className='footer__list-item'><Link to="/" className='footer__link'><img src={github} alt='гитхаб'/></Link></li>
          <li className='footer__list-item'><Link to="/" className='footer__link'><img src={facebook} alt='фэйсбук'/></Link></li>
        </ul>
      </nav>
    </footer>
  )
}
