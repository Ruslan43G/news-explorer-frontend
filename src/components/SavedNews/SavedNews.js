import React from 'react';
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import MainApi from '../../utils/MainApi';

export default function SavedNews (props) {

  const [saved, setSaved] = React.useState(true);
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    MainApi.showArticles(jwt)
      .then(res => setArticles(res))
      .catch(err => console.log(err))
  }, [])

  const deleteArticle = (id) => {
    const jwt = localStorage.getItem('jwt');
    MainApi.deleteArticle(jwt, id)
      .then((res) => {
        console.log(res);
        setArticles(articles.filter(item => item._id !== id));
      })
      .catch(err => console.log(err))

  }

  return (
    <section className='savednews'>
      {articles.map(el => <NewsCard saved={saved} key={el._id} id={el._id} loggedIn={props.loggedIn} keyword={el.keyword} image={el.image} date={el.date} title={el.title} text={el.text} source={el.source} deleteArticle={deleteArticle}/>)}
    </section>
  )
}
