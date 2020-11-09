import React from 'react';
import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup (props) {
  // переменная состояния с данными о юзере
  const [user, setUser] = React.useState({email: '', password: ''});

  const [resError, setResError] = React.useState('');
  // хэндлер ввода почты
  const handleEmailInput = (evt) => {
    setUser({
      ...user,
      email: evt.target.value,
    })
  }
  // хэндлер ввода пароля
  const handlePasswordInput = (evt) => {
    setUser({
      ...user,
      password: evt.target.value,
    })
  }
  // хэндлер сабмита
  const handleSubmit = () => {
    props.handleLogin({ ...user })
      .then((res) => {
        console.log(res);
        props.setLoggedIn(true);
        props.close(false);
        localStorage.setItem('jwt', res.token)
      })
      .catch((err) => {
        err === '400 Bad Request' ? setResError('Неверные данные') : err === '401 Unauthorized' ? setResError('Такой пользователь не зарегистрирован') : setResError('Произошла ошибка');
        console.log(err);
      })
  }
  return (
    <PopupWithForm error={resError} submit={handleSubmit}name={'signin'} link={props.link} isOpen={props.isOpen} close={props.close} title='Вход' buttonText='Войти' linkText='Зарегистрироваться' >
      <label className='popup__label'>Email</label>
      <input type='email' className='popup__input' placeholder='Введите email' onChange={handleEmailInput} required></input>
      <span className='popup__error'></span>
      <label className='popup__label'>Пароль</label>
      <input type='password' className='popup__input' placeholder='Введите пароль' required onChange={handlePasswordInput}></input>
      <span className='popup__error'></span>
    </PopupWithForm>
  )
}
