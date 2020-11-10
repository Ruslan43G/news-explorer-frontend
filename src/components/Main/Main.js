import React from 'react';
import './Main.css';
import Searchform from '../SearchForm/SearchForm';
import SearchReuslts from '../SearchResults/SearchResults';
import About from '../About/About';


export default function Main (props) {

  const [ articles, setArticles ] = React.useState([]);

  React.useEffect(() => {
    props.header(false);
  }, []);

  React.useEffect(() => {
    const news = JSON.parse(localStorage.getItem('articles'));
    if (news) {
      setArticles(news);
    }
  }, [])

  return (
      <main className="main">
        <Searchform request={props.request} setArticles={setArticles} />
        <SearchReuslts loggedIn={props.loggedIn} articles={articles}/>
        <About />
      </main>
  )
}
