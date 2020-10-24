import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import logoutImg from '../../images/Navigation/logout.svg';

export default function Navigation (props) {

  return (
      <nav className='navigation'>
          <ul className='navigation__list'>
              <li><Link to="/" className='navigation__item navigation__item_underline'>Главная</Link></li>
              <li>{props.loggedIn ? <Link to='/saved-news' className='navigation__item'>Сохранённые статьи</Link> : ''}</li>
              <li>{props.loggedIn ? <button className='navigation__btn' onClick={props.auth}>{'Руслан'}<img className='navigation__logout' src={logoutImg} alt='иконка кнопки выхода'/></button> : <button className='navigation__btn' onClick={props.auth}>Авторизироваться</button>}</li>
          </ul>
      </nav>
  )
}
