import React from 'react';
import { Link, link } from 'react-router-dom';
import './PopupWithForm.css';

export default function PopupWithForm (props) {

  const [open, setIsopen] = React.useState(true);

  function closePopup () {
    setIsopen(false);
  }

  return (
    <section className={`popup ${open ? 'popup_opened' : ''}`}>
      <form className='popup__form'>
        <button type='reset' className='popup__close' onClick={closePopup}></button>
        <h3 className='popup__title'>{props.title}</h3>
        {props.children}
        <button className='popup__submit popup__submit_disabled'>{props.buttonText}</button>
        <p className='popup__footer'>или<Link to={props.link} className='popup__link'>{props.linkText}</Link></p>
      </form>
    </section>
  )
}
