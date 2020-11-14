import React from 'react';
import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup (props) {
  // переменная состояния с данными о юзере
  const [user, setUser] = React.useState({email: '', password: ''});
  // стейт с ошибкой от сервера
  const [resError, setResError] = React.useState('');
  //  стейт переменные для валидации
  const [spanEmailText, setSpanEmailText] = React.useState('');
  const [spanPasswordText, setSpanPasswordText] = React.useState('');
  const [buttonState, setButtonState] = React.useState(true);
  // функция проверки формы на валидность
  const checkFormValidity = (evt) => {
    evt.target.closest('form').checkValidity() ? setButtonState(true) : setButtonState(false);
  }
  // сброс ошибок валидации
  const resetForm = (evt) => {
    evt.target.closest('form').reset();
    props.close();
    setSpanEmailText('');
    setSpanPasswordText('');
    setButtonState(true);
  }
  // хэндлер ввода почты
  const handleEmailInput = (evt) => {
    evt.target.validity.valid ? setSpanEmailText('') : setSpanEmailText(evt.target.validationMessage);
    checkFormValidity(evt);
    setUser({
      ...user,
      email: evt.target.value,
    })
  }
  // хэндлер ввода пароля
  const handlePasswordInput = (evt) => {
    checkFormValidity(evt);
    evt.target.validity.valid ? setSpanPasswordText('') : setSpanPasswordText(evt.target.validationMessage)
    setUser({
      ...user,
      password: evt.target.value,
    })
  }
  // хэндлер сабмита
  const handleSubmit = () => {
    props.handleLogin({ ...user })
      .then((res) => {
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
    <PopupWithForm button={buttonState} error={resError} submit={handleSubmit}name={'signin'} link={props.link} isOpen={props.isOpen} close={resetForm} title='Вход' buttonText='Войти' linkText='Зарегистрироваться' >
      <label className='popup__label'>Email</label>
      <input type='email' name='email' className='popup__input' placeholder='Введите email' onChange={handleEmailInput} required></input>
      <span className='popup__error'>{spanEmailText}</span>
      <label className='popup__label'>Пароль</label>
      <input type='password' className='popup__input' placeholder='Введите пароль' minLength={8} required onChange={handlePasswordInput}></input>
      <span className='popup__error'>{spanPasswordText}</span>
    </PopupWithForm>
  )
}
