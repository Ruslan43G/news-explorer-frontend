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

function App() {
  // переменная состояния отвечающая за авторизацию.
  const [loggedIn, setLoggedIn] = React.useState(false);
  // переменная состояния для статуса темы хидера
  const [light, setLight] = React.useState(false);

  function changeLoggedInStatus () {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} auth={changeLoggedInStatus} theme={light}/>
      <Switch>
        <Route exact path='/'>
          <Main header={setLight} loggedIn={loggedIn}/>
        </Route>
        <Route path='/saved-news'>
          <SavedNewsheader header={setLight}/>
          <SavedNews />
        </Route>
      </Switch>
        <LoginPopup />
        <RegisterPopup />
      <Footer />
    </div>
  );
}

export default App;
