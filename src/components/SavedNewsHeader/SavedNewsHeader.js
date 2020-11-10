import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

export default function SavedNewsHeader (props) {
  const { name } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    props.header(true);
  }, []);

  return (
    <section className='savednews-header'>
      <p className='savednews-header__name'>Сохранённые статьи</p>
      <h2 className='savednews-header__title'>{`${name}, у вас 5 сохранённых статей`}</h2>
      <p className='savednews-header__subtitle'>По ключевым словам: <span className='savednews-header__span'>Природа, Тайга и 2-м другим</span></p>
    </section>
  )
}
