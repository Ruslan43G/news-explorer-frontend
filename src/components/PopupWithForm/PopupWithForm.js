import React from 'react';
import './PopupWithForm.css';

export default function PopupWithForm (props) {


  function overlayClose (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(evt)
    }
  }

  function closePopup (evt) {
    props.close(evt);
  }

  function openAnotherPopup (evt) {
    closePopup(evt);
    props.link(true)
  }

  function escClose (evt) {
    if (evt.key === 'Escape') {
      closePopup(evt)
    }
  }

  function submithandler(evt) {
    evt.preventDefault();
    props.submit(true);
  }

  React.useEffect(() => {
    document.addEventListener('keydown', escClose);
    return () => document.removeEventListener('keydown', escClose);
  }, []);

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={overlayClose}>
      <form className='popup__form' name={props.name} >
        <button type='reset' className='popup__close' onClick={closePopup}></button>
        <h3 className='popup__title'>{props.title}</h3>
        {props.children}
        <span className='popup__server-error'>{props.error}</span>
        <button type='submit' className={`popup__submit ${props.button ? '' : 'popup__submit_disabled'}`} disabled={!props.button} onClick={submithandler}>{props.buttonText}</button>
        <p className='popup__footer'>или<button type='button' onClick={openAnotherPopup} className='popup__link'>{props.linkText}</button></p>
      </form>
    </section>
  )
}
