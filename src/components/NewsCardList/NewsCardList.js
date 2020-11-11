import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList (props) {
  const [ index, setIndex ] = React.useState(6);
  const [ articles, setArticles ] = React.useState(props.articles.slice(0, 3));
  const [saved, setSaved] = React.useState(true);

  const showMoreArticles = () => {
    setIndex(prev => prev += 3);
    setArticles(props.articles.slice(0, index));
  }



  const formatDate = (item) => {
    const dataParse = new Date(item);
    const data = `${dataParse.toLocaleString("ru-RU", { month: 'long', day: 'numeric' })}, ${dataParse.getFullYear()}`;
    return data;
  }

  return (
    <section className='newscardlist'>
      <div className={`newscardlist__container`}>
        {articles.map((item, index) => <NewsCard data={item} saveArticleRequest={props.saveArticleRequest} key={index} id={index} keyword={item.keyword} loggedIn={props.loggedIn} image={item.urlToImage} date={formatDate(item.publishedAt)} title={item.title} text={item.description} source={item.source.name} />)}
      </div>
      {props.articles.length !== articles.length ? <button className='newscardlist__show-btn' onClick={showMoreArticles}>Показать еще</button> : ''}
    </section>
  )
}
