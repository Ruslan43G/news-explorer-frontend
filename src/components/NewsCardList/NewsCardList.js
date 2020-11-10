import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import image1 from '../../images/NewsCard/image.jpg';
import image2 from '../../images/NewsCard/image2.jpg';
import image3 from '../../images/NewsCard/image3.jpg';

// Временные константы для наполнения карточек
const title1 = 'Национальное достояние – парки';
const title2 = 'Лесные огоньки: история одной фотографии';
const title3 = '«Первозданная тайга»: новый фотопроект Игоря Шпиленка';
const text1 = 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.';
const text2 = 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.';
const text3 = 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...';


export default function NewsCardList (props) {

  const formatDate = (item) => {
    const dataParse = new Date(item);
    const data = `${dataParse.toLocaleString("ru", { month: 'long', day: 'numeric' })}, ${dataParse.getFullYear()}`;
    return data;
  }

  return (
    <section className='newscardlist'>
      <div className={`newscardlist__container`}>
        {props.articles.map((item, index) => <NewsCard key={index} id={index} loggedIn={props.loggedIn} image={item.urlToImage} date={formatDate(item.publishedAt)} title={item.title} text={item.description} source={item.source.name} />)}
      </div>
      <button className='newscardlist__show-btn'>Показать еще</button>
    </section>
  )
}
