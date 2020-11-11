import React from 'react';
import './Main.css';
import Searchform from '../SearchForm/SearchForm';
import SearchReuslts from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';


export default function Main (props) {

  const [ articles, setArticles ] = React.useState([]);
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ keyword, setKeyword] = React.useState('');

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
        <Searchform keyword={keyword} setKeyword={setKeyword} request={props.request} setArticles={setArticles} setResult={props.setResult} setLoading={setIsLoading}/>
        {articles.length >= 1 ? <SearchReuslts saveArticleRequest={props.saveArticleRequest} loggedIn={props.loggedIn} articles={articles}/> : ''}
        {isLoading ? <Preloader /> : ''}
        {props.notFound ? <NotFound /> : ''}
        <About />
      </main>
  )
}
