import React from 'react';
import './SearchForm.css';

export default function SearchForm (props) {
  const [keyword, setKeyword] = React.useState('');

  const handleKeywordInput = (evt) => {
    setKeyword(evt.target.value);
  }
  function searchSubmit (evt) {
    evt.preventDefault();
    props.request(keyword)
      .then((res) => {
        console.log(res);
        const articles = Array.from(res.articles);
        props.setArticles(articles);
        localStorage.setItem('articles', JSON.stringify(articles));
        const a = JSON.parse(localStorage.getItem('articles'));
        console.log(a)
      })
      .catch(err => console.log(err))
  }

  return (
    <section className='searchform'>
      <form className='searchform__form'>
        <h1 className='searchform__title'>Что творится в мире?</h1>
        <h2 className='searchform__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
        <div className='searchform__container'>
          <input className='searchform__input' placeholder='Введите тему новости' onChange={handleKeywordInput} required></input>
          <button className='searchform__btn' type='submit' onClick={searchSubmit}>Искать</button>
        </div>
      </form>
    </section>
  )
}
