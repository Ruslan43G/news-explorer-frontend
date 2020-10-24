import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsheader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';

function App() {
  // переменная состояния отвечающая за авторизацию.
  const [loggedIn, setLoggedIn] = React.useState(false);

  function changeLoggedInStatus () {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} auth={changeLoggedInStatus}/>
      <Switch>
        <Route exact path='/'>
          <Main loggedIn={loggedIn}/>
        </Route>
        <Route path='/saved-news'>
          <SavedNewsheader />
          <NewsCardList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
