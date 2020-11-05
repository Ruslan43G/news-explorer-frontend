import React from 'react';
import './SearchForm.css';

export default function SearchForm (props) {

  function searchSubmit (evt) {
    evt.preventDefault();
    console.log('Тык!');
  }

  return (
    <section className='searchform'>
      <form className='searchform__form'>
        <h1 className='searchform__title'>Что творится в мире?</h1>
        <h2 className='searchform__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
        <div className='searchform__container'>
          <input className='searchform__input' placeholder='Введите тему новости' required></input>
          <button className='searchform__btn' type='submit' onClick={searchSubmit}>Искать</button>
        </div>
      </form>
    </section>
  )
}
