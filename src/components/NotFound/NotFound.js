import React from 'react';
import './NotFound.css';
import notFoundImage from '../../images/SearchResults/not-found.png';
export default function NotFound (props) {

  return (
    <div className='notfound'>
      <img className='notfound__img' src={notFoundImage} alt='не найдено' />
      <h4 className='notfound__title'>Ничего не найдено</h4>
      <p className='notfound__subtitle'>К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  )
}
