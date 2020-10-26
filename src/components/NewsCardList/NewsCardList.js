import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import image1 from '../../images/NewsCard/image.jpg';
import image2 from '../../images/NewsCard/image2.jpg';
import image3 from '../../images/NewsCard/image3.jpg';
import image4 from '../../images/NewsCard/image4.jpg';
import image5 from '../../images/NewsCard/image5.jpg';

// Временные константы для наполнения карточек
const title1 = 'Национальное достояние – парки';
const title2 = 'Лесные огоньки: история одной фотографии';
const title3 = '«Первозданная тайга»: новый фотопроект Игоря Шпиленка';
const text1 = 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.';
const text2 = 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.';
const text3 = 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...';


export default function NewsCardList (props) {
  // переменная состояния высоты контейнера с карточками
  const [fullSize, setFullSize] = React.useState(false);

  // функция изменения высоты контейнера с карточками. Применяется на кнопке "Показать еще".
  function changeHeight () {
    setFullSize(true);
  }

  return (
    <section className='newscardlist'>
      <div className={`newscardlist__container ${fullSize ? '' : 'newscardlist__container_small'}`}>
        <NewsCard loggedIn={props.loggedIn} keyword={'Природа'} image={image1} date={'2 августа, 2019'} title={title1} text={text1} source={'ДЗЭН'} />
        <NewsCard loggedIn={props.loggedIn} keyword={'Тайга'} image={image2} date={'2 августа, 2019'} title={title2} text={text2} source={'Афиша'} />
        <NewsCard loggedIn={props.loggedIn} keyword={'Фотография'} image={image3} date={'2 августа, 2019'} title={title3} text={text3} source={'Медиазона'} />
        <NewsCard loggedIn={props.loggedIn} keyword={'Природа'} image={image4} date={'2 августа, 2019'} title={title1} text={text1} source={'ДЗЭН'} />
        <NewsCard loggedIn={props.loggedIn} keyword={'Фотография'} image={image5} date={'2 августа, 2019'} title={title2} text={text2} source={'Афиша'} />
      </div>
      <button className='newscardlist__show-btn' onClick={changeHeight}>Показать еще</button>
    </section>
  )
}
