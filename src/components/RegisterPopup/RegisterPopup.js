import React from 'react';
import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function RegisterPopup (props) {
  // переменная состояния с данными о юзере
  const [user, setUser] = React.useState({name: '', email: '', password: ''});
  const [resError, setResError] = React.useState('');
  // хэндлер ввода имени
  const handleNameInput = (evt) => {
    setUser({
      ...user,
      name: evt.target.value
    })
  }
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

  const handleSubmit = () => {
    props.handleRegister({...user})
      .then((res) => {
        props.succes(true);
        console.log(res);
      })
      .catch((err) => {
        err === '400 Bad Request' ? setResError('Неверные данные') : err === '409 Conflict' ? setResError('Такой пользователь зарегистрирован') : setResError('Произошла ошибка');
        console.log(err)
      })
  }

  return (
    <PopupWithForm error={resError} submit={handleSubmit} name={'signup'} link={props.link} isOpen={props.isOpen} close={props.close} title='Регистрация' buttonText='Зарегистрироваться' linkText='Войти'>
      <label className='popup__label'>Email</label>
      <input type='email' className='popup__input' placeholder='Введите email' onChange={handleEmailInput} required></input>
      <span className='popup__error'></span>
      <label className='popup__label'>Пароль</label>
      <input type='password' className='popup__input' placeholder='Введите пароль' onChange={handlePasswordInput} required></input>
      <span className='popup__error'></span>
      <label className='popup__label'>Имя</label>
      <input type='text' className='popup__input' placeholder='Введите своё имя' onChange={handleNameInput} required></input>
      <span className='popup__error'></span>
    </PopupWithForm>
  )
}
