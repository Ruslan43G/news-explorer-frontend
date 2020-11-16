import React from 'react';
import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function RegisterPopup (props) {
  // переменная состояния с данными о юзере
  const [user, setUser] = React.useState({name: '', email: '', password: ''});
  const [resError, setResError] = React.useState('');
  //  стейт переменные для валидации
  const [spanNameText, setSpanNameText] = React.useState('');
  const [spanEmailText, setSpanEmailText] = React.useState('');
  const [spanPasswordText, setSpanPasswordText] = React.useState('');
  const [buttonState, setButtonState] = React.useState(true);
  // сброс ошибок валидации
  const resetForm = (evt) => {
    const form = evt.target.querySelector('form') || evt.target.closest('form');
    if (form) {
      form.reset();
    }
    props.close()
    setSpanNameText('');
    setSpanEmailText('');
    setSpanPasswordText('');
    setButtonState(true);
  }
  // функция проверки формы на валидность
  const checkFormValidity = (evt) => {
    evt.target.closest('form').checkValidity() ? setButtonState(true) : setButtonState(false);
  }
  // хэндлер ввода имени
  const handleNameInput = (evt) => {
    evt.target.validity.valid ? setSpanNameText('') : setSpanNameText(evt.target.validationMessage);
    checkFormValidity(evt);
    setUser({
      ...user,
      name: evt.target.value
    })
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
  // обработчки сабмита
  const handleSubmit = () => {
    props.handleRegister({...user})
      .then((res) => {
        props.close()
        props.succes(true);
        console.log(res);
      })
      .catch((err) => {
        err === '400 Bad Request' ? setResError('Неверные данные') : err === '409 Conflict' ? setResError('Такой пользователь зарегистрирован') : setResError('Произошла ошибка');
        console.log(err)
      })
  }

  return (
    <PopupWithForm button={buttonState} error={resError} submit={handleSubmit} name={'signup'} link={props.link} isOpen={props.isOpen} close={resetForm} title='Регистрация' buttonText='Зарегистрироваться' linkText='Войти'>
      <label className='popup__label'>Email</label>
      <input type='email' className='popup__input' placeholder='Введите email' onChange={handleEmailInput} required></input>
      <span className='popup__error'>{spanEmailText}</span>
      <label className='popup__label'>Пароль</label>
      <input type='password' className='popup__input' placeholder='Введите пароль' minLength={8} onChange={handlePasswordInput} required></input>
      <span className='popup__error'>{spanPasswordText}</span>
      <label className='popup__label'>Имя</label>
      <input type='text' className='popup__input' placeholder='Введите своё имя' onChange={handleNameInput} required></input>
      <span className='popup__error'>{spanNameText}</span>
    </PopupWithForm>
  )
}
