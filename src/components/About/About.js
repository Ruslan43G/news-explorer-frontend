import React from 'react';
import './About.css';
import ava from '../../images/About/avatar.jpg';

export default function About (props) {

  return (
    <section className='about'>
      <img className='about__avatar' src={ava} alt='Аватар'/>
      <div className='about__data'>
        <h3 className='about__title'>Об авторе</h3>
        <p className='about__text'>Меня зовут Руслан Тихомиров, начинающий веб-разработчик. Умею верстать, програмировать фронтенд и немгого бэкенд на JavaScript.</p>
        <p className='about__text'>Этот сайт - мой дипломный проект на курсах веб-разработки в Яндекс.Практикум. Он представляет из себя SPA на React.js. Взаимодействует с двумя различными API. Первое - стороннее для поиска новостей по ключевому слову. Второе написано мной, для регистрации и авторизации пользователей, сохранения и удаления статей. И фронт и бэк выложены на виртуальную машину под управлением Ubuntu. На курсах я обучился кроссбраузерной, семантической и адаптивной вёрстке. Освоил JavaScript, React и Node.js.</p>
      </div>
    </section>
  )
}
