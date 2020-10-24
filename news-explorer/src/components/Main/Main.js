import React from 'react';
import './Main.css';
import Searchform from '../SearchForm/SearchForm';
import SearchReuslts from '../SearchResults/SearchResults';
import About from '../About/About';


export default function Main (props) {

  return (
      <main className="main">
        <Searchform />
        <SearchReuslts loggedIn={props.loggedIn}/>
        <About />
      </main>
  )
}
