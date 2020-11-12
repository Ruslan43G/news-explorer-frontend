import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList (props) {
  // стейты
  const [ index, setIndex ] = React.useState(6);
  const [ articles, setArticles ] = React.useState(props.articles.slice(0, 3));


  const [saved, setSaved] = React.useState([]);

  //функция для клика по енопке показать еще. Добавляет в массив еще новостей
  const showMoreArticles = () => {
    setIndex(prev => prev += 3);
    setArticles(props.articles.slice(0, index));
  }

  React.useEffect(() => {
    const saved = localStorage.getItem('saved');
    if (saved) {
      setSaved(JSON.parse(saved));
    }
  }, [])

  return (
    <section className='newscardlist'>
      <div className={`newscardlist__container`}>
        {articles.map((item) => <NewsCard saveNews={setSaved} news={saved} data={item} saveArticleRequest={props.saveArticleRequest} deleteArticle={props.deleteArticle} key={item.id + 1} id={item.id} keyword={item.keyword} loggedIn={props.loggedIn} image={item.urlToImage} date={item.publishedAt} title={item.title} text={item.description} source={item.source.name} />)}
      </div>
      {props.articles.length !== articles.length ? <button className='newscardlist__show-btn' onClick={showMoreArticles}>Показать еще</button> : ''}
    </section>
  )
}
