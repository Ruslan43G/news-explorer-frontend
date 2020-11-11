import React from 'react';
import './SearchResults.css';
import NewsCardlist from '../NewsCardList/NewsCardList';

export default function SearchReslusts (props) {

  return (
    <section className='searchresults'>
      <h3 className='searchresults__title'>Результаты поиска</h3>
      <NewsCardlist saveArticleRequest={props.saveArticleRequest} loggedIn={props.loggedIn} articles={props.articles}/>
    </section>
  )
}
