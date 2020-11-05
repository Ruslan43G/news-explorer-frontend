import React from 'react';
import './PopupSucces.css';

export default function PopupSucces (props) {

  function closePopup () {
    props.close(false);
  }

  function overlayClose (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup()
    }
  }

  function escClose (evt) {
    if (evt.key === 'Escape') {
      closePopup()
    }
  }

  function openAnotherPopup () {
    closePopup();
    props.link(true);
  }

  React.useEffect(() => {
    document.addEventListener('keydown', escClose);
    return () => document.removeEventListener('keydown', escClose);
  }, []);

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={overlayClose}>
      <div className='popup__container'>
        <button type='reset' className='popup__close' onClick={closePopup}></button>
        <h3 className='popup__title'>Пользователь успешно зарегистрирован!</h3>
        <button type='button' className='popup__link popup__link_succes' onClick={openAnotherPopup}>Войти</button>
      </div>
    </section>
  )
}
