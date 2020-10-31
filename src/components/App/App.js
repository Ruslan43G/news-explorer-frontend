import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNewsheader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import PopupSucces from '../PopupSucces/PopupSucces';

function App() {
  // переменная состояния отвечающая за авторизацию.
  const [loggedIn, setLoggedIn] = React.useState(false);
  // переменная состояния для статуса темы хидера
  const [light, setLight] = React.useState(false);
  // переменная состояния открытия попапа регистрации
  const [regIsopen, setRegIsOpen] = React.useState(false);
  // переменная состояния открытия попапа входа
  const [loginIsopen, setLoginIsOpen] = React.useState(false);
  // переменная состояния попапа с сообщением
  const [succesIsopen, setSuccesIsOpen] = React.useState(false);

  function changeLoggedInStatus () {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} auth={changeLoggedInStatus} theme={light} openLogin={setLoginIsOpen}/>
      <Switch>
        <Route exact path='/'>
          <Main header={setLight} loggedIn={loggedIn}/>
        </Route>
        <Route path='/saved-news'>
          <SavedNewsheader header={setLight}/>
          <SavedNews />
        </Route>
      </Switch>
        <LoginPopup isOpen={loginIsopen} link={setRegIsOpen} close={setLoginIsOpen}/>
        <RegisterPopup isOpen={regIsopen} link={setLoginIsOpen} close={setRegIsOpen} succes={setSuccesIsOpen}/>
        <PopupSucces isOpen={succesIsopen} close={setSuccesIsOpen} link={setLoginIsOpen}/>
      <Footer />
    </div>
  );
}

export default App;