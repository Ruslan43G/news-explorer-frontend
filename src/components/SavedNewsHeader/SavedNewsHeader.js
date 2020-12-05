import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

export default function SavedNewsHeader (props) {
  const { name } = React.useContext(CurrentUserContext);
  const [ keywords, setKeywords ] = React.useState([]);

  React.useEffect(() => {
    props.header(true);
  }, []);

  React.useEffect(() => {
    setKeywords(sortByFrequency(props.articles.map(el => el.keyword[0].toUpperCase() + el.keyword.slice(1))));
  }, [props.articles])

  const sortByFrequency = (arr) => {
    const frequency = {};
    arr.forEach((item) => frequency[item] = 0);
    const uniques = arr.filter((item) => ++frequency[item] === 1);
    return uniques.sort((a, b) => frequency[b] - frequency[a]);
  }

  function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }
  const savedText = declOfNum(props.articles.length, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);

  return (
    <section className='savednews-header'>
      <p className='savednews-header__name'>Сохранённые статьи</p>
      <h2 className='savednews-header__title'>{`${name}, у вас ${props.articles.length} ${savedText}`}</h2>
      <p className='savednews-header__subtitle'>По ключевым словам: <span className='savednews-header__span'>{keywords.length > 3 ? `${keywords[0]}, ${keywords[1]} и ${keywords.length - 2}-м другим` : `${keywords.join(', ')}`}</span></p>
    </section>
  )
}
