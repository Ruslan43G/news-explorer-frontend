import React from 'react';
import './SearchResults.css';
import NotFound from '../NotFound/NotFound';
import NewsCardlist from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';

export default function SearchReslusts (props) {

  return (
    <section className='searchresults'>
      <h3 className='searchresults__title'>Результаты поиска</h3>
      {/* <Preloader />
      <NotFound /> */}
      <NewsCardlist loggedIn={props.loggedIn}/>
    </section>
  )
}
