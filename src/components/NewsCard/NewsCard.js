import React from 'react';
import './NewsCard.css';

export default function NewsCard (props) {
  // переменная состояния отвечающая за отметку карточек сохраненными
  const [mark, setmark] = React.useState(false);
  // функция для отметки карты сохраненной
  function setCardMarked () {
    setmark(!mark);
  }

  const saveArticle = () => {
    const jwt = localStorage.getItem('jwt');

    props.saveArticleRequest(jwt, {
      keyword: props.data.keyword,
      title: props.title,
      text: props.text,
      date: props.date,
      source: props.source,
      link: props.data.url,
      image: props.image })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className='newscard' id={props.id + 1} data-keyword={props.keyword}>
      {props.saved ? <button className={`newscard__icon newscard__icon_trash`}></button> : props.loggedIn ? <button className={`newscard__icon ${mark ? 'newscard__icon_marked' : ''}`} onClick={saveArticle}></button> : <button className={`newscard__icon newscard__icon_not-loggedin`}></button>}
      <span className={`newscard__keyword ${props.saved ? '' : 'newscard__keyword_hidden'}` }>{props.keyword}</span>
      <img className='newscard__img' src={props.image} alt='Картинка новости'/>
      <div className='newscard__content'>
        <small className='newscard__date'>{props.date}</small>
        <h4 className='newscard__title'>{props.title}</h4>
        <p className='newscard__text'>{props.text}</p>
        <small className='newscard__source'>{props.source}</small>
      </div>
    </div>
  )
}
