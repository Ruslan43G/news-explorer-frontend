import React from 'react';
import './SavedNewsHeader.css';

export default function SavedNewsHeader (props) {

  return (
    <section className='savednews'>
      <p className='savednews__name'>Сохранённые статьи</p>
      <h2 className='savednews__title'>Руслан, у вас 5 сохранённых статей</h2>
      <p className='savednews__subtitle'>По ключевым словам: <span className='savednews__span'>Природа, Тайга и 2-м другим</span></p>
    </section>
  )
}
