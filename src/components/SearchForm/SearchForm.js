import React from 'react';
import './SearchForm.css';

export default function SearchForm (props) {

  const handleKeywordInput = (evt) => {
    props.setKeyword(evt.target.value);
  }

  function searchSubmit (evt) {
    props.setLoading(true);
    evt.preventDefault();
    props.request(props.keyword)
      .then((res) => {
        if (res.articles.length === 0) {
          return props.setResult(true);
        }
        const articles = Array.from(res.articles);
        articles.map((el, i) => {
          el.keyword = props.keyword;
          el.id = i + 1;
          return el;
        });
        props.setArticles(articles);
        localStorage.setItem('articles', JSON.stringify(articles));
        const a = JSON.parse(localStorage.getItem('articles'));
        console.log(a)
      })
      .catch((err) => {
        console.log(err);
        props.setResult(true)
      })
      .finally(() => props.setLoading(false));
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
