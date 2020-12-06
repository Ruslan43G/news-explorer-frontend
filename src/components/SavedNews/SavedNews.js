import React from 'react';
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import MainApi from '../../utils/MainApi';

export default function SavedNews (props) {

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    MainApi.showArticles(jwt)
      .then(res => props.setSaved(res))
      .catch(err => console.log(err))
  }, [])

  const deleteArticle = (id) => {
    const jwt = localStorage.getItem('jwt');
    props.deleteArticle(jwt, id)
      .then((res) => {
        props.setSaved(props.saved.filter(item => item._id !== id));
      })
      .catch(err => console.log(err))

  }

  return (
    <section className='savednews'>
      {props.saved.map(el => <NewsCard saved={true} key={el._id} id={el._id} loggedIn={props.loggedIn} keyword={el.keyword} image={el.image} date={el.date} url={el.link} title={el.title} text={el.text} source={el.source} deleteArticle={deleteArticle}/>)}
    </section>
  )
}
