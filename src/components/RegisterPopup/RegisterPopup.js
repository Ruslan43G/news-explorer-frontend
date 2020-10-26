import React from 'react';
import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function RegisterPopup (props) {

  return (
    <PopupWithForm name={'signup'} link={props.link} isOpen={props.isOpen} close={props.close} title='Регистрация' buttonText='Зарегистрироваться' linkText='Войти'>
      <label className='popup__label'>Email</label>
      <input type='email' className='popup__input' placeholder='Введите email' required></input>
      <span className='popup__error'></span>
      <label className='popup__label'>Пароль</label>
      <input type='password' className='popup__input' placeholder='Введите пароль' required></input>
      <span className='popup__error'>Error</span>
      <label className='popup__label'>Имя</label>
      <input type='text' className='popup__input' placeholder='Введите своё имя' required></input>
      <span className='popup__error'></span>
    </PopupWithForm>
  )
}
