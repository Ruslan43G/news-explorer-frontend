import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Navigation.css';
import { Link, Route, useHistory } from 'react-router-dom';
import logoutImg from '../../images/Navigation/logout.svg';
import logoutBlack from '../../images/Navigation/logout-black.svg';



export default function Navigation (props) {
  const { name } = React.useContext(CurrentUserContext);
  const [userName, setUserName] = React.useState('');
  const history = useHistory();

  function openLoginPopup () {
    props.openLogin(true);
  }

  function logOut () {
    history.push('/');
    props.auth();
    localStorage.removeItem('jwt');
  }

  React.useEffect(() => {
    setUserName(name);
  }, [name])

  return (
      <nav className={`navigation ${props.open ? 'navigation_mobile-opened' : props.theme ? 'navigation_theme_dark' : ''}`}>
        <ul className='navigation__list'>
            <Route exact path='/'>
              <li><Link to="/" className='navigation__item navigation__item_underline'>Главная</Link></li>
              <li>{props.loggedIn || props.open ? <Link to='/saved-news' className='navigation__item'>Сохранённые статьи</Link> : ''}</li>
              <li>{props.loggedIn ? <button className='navigation__btn' onClick={logOut}>{userName}<img className='navigation__logout' src={logoutImg} alt='иконка кнопки выхода'/></button> : <button className='navigation__btn' onClick={openLoginPopup}>Авторизироваться</button>}</li>
            </Route>
            <Route exact path='/saved-news'>
              <li><Link to="/" className='navigation__item navigation__item_black '>Главная</Link></li>
              <li>{props.loggedIn ? <Link to='/saved-news' className='navigation__item navigation__item_black  navigation__item_underline_black'>Сохранённые статьи</Link> : ''}</li>
              <li>{props.loggedIn ? <button className='navigation__btn navigation__btn_black' onClick={logOut}>{userName}<img className='navigation__logout' src={logoutBlack} alt='иконка кнопки выхода'/></button> : <button className='navigation__btn' onClick={openLoginPopup}>Авторизироваться</button>}</li>
            </Route>
          </ul>
      </nav>
  )
}
