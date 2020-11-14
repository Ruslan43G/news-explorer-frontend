import React from 'react';
import './SearchForm.css';

export default function SearchForm (props) {

  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  const handleKeywordInput = (evt) => {
    props.setKeyword(evt.target.value);
  }

  function searchSubmit (evt) {
    evt.preventDefault();
    if (!props.keyword) {
      setError(true);
      setErrorText('ffff')
      return
    }
    props.setArticles([]);
    props.setLoading(true);
    props.request(props.keyword)
      .then((res) => {
        if (res.articles.length === 0) {
          return props.setResult(true);
        }
        props.setResult(false);
        const articles = Array.from(res.articles);
        articles.map((el, i) => {
          el.keyword = props.keyword;
          el.id = i + 1;
          return el;
        });
        props.setArticles(articles);
        localStorage.removeItem('articles');
        localStorage.setItem('articles', JSON.stringify(articles));
      })
      .catch((err) => {
        console.log(err);
        props.setResult(true)
      })
      .finally(() => props.setLoading(false));
  }

  return (
    <section className='searchform'>
      <div className='searchform__form'>
        <h1 className='searchform__title'>Что творится в мире?</h1>
        <h2 className='searchform__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
        <form className='searchform__container' onSubmit={searchSubmit} noValidate>
          <input className='searchform__input' placeholder='Введите тему новости' onChange={handleKeywordInput} required></input>
          <button className='searchform__btn' type='submit'>Искать</button>
        </form>
      </div>
    </section>
  )
}
