import React from 'react';
import './SavedNewsHeader.css';

export default function SavedNewsHeader (props) {

  React.useEffect(() => {
    props.header(true);
  }, []);

  return (
    <section className='savednews-header'>
      <p className='savednews-header__name'>Сохранённые статьи</p>
      <h2 className='savednews-header__title'>Руслан, у вас 5 сохранённых статей</h2>
      <p className='savednews-header__subtitle'>По ключевым словам: <span className='savednews-header__span'>Природа, Тайга и 2-м другим</span></p>
    </section>
  )
}