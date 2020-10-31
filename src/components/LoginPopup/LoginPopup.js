import React from 'react';
import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup (props) {

  return (
    <PopupWithForm name={'signin'} link={props.link} isOpen={props.isOpen} close={props.close} title='Вход' buttonText='Войти' linkText='Зарегистрироваться' >
      <label className='popup__label'>Email</label>
      <input type='email' className='popup__input' placeholder='Введите email' required></input>
      <span className='popup__error'>Error</span>
      <label className='popup__label'>Пароль</label>
      <input type='password' className='popup__input' placeholder='Введите пароль' required></input>
      <span className='popup__error'>Error</span>
    </PopupWithForm>
  )
}