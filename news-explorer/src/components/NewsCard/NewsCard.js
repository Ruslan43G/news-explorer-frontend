import React from 'react';
import './NewsCard.css';

export default function NewsCard (props) {
  // переменная состояния отвечающая за отметку карточек сохраненными
  const [mark, setmark] = React.useState(false);
  // функция для отметки карты сохраненной
  function setCardMarked () {
    setmark(!mark);
  }

  return (
    <div className='newscard '>
      {props.loggedIn ? <button className={`newscard__icon ${mark ? 'newscard__icon_marked' : ''}`} onClick={setCardMarked}></button> : <button className={`newscard__icon newscard__icon_not-loggedin`}></button>}
      <span className='newscard__keyword newscard__keyword_hidden'>{props.keyword}</span>
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
