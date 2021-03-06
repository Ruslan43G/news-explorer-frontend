import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNewsheader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import PopupSucces from '../PopupSucces/PopupSucces';
import mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute'

function App() {
  // переменная состояния отвечающая за авторизацию.
  const [loggedIn, setLoggedIn] = React.useState(false);
  // переменная состояния для данных о пользователе
  const [user, setUser] = React.useState({ name: '', email: '' })
  // переменная состояния для статуса темы хидера
  const [light, setLight] = React.useState(false);
  // переменная состояния открытия попапа регистрации
  const [regIsopen, setRegIsOpen] = React.useState(false);
  // переменная состояния открытия попапа входа
  const [loginIsopen, setLoginIsOpen] = React.useState(false);
  // переменная состояния попапа с сообщением
  const [succesIsopen, setSuccesIsOpen] = React.useState(false);
  // стэйт результата запроса поиска новостей
  const [notFound, setNotFound] = React.useState(false);
  // стэйт для сохранённых новостей
  const [ savedArticles, setSavedArticles ] = React.useState([]);

  function changeLoggedInStatus () {
    setLoggedIn(!loggedIn);
  }

  const register = ({ name, email, password }) => {
    return mainApi.signup({ name, email, password })
  }

  const login = ({email, password }) => {
    return mainApi.signin({email, password})
  }

  const newsRequest = (keyword) => {
    return newsApi.searchRequest(keyword)
  }

  const saveArticleRequest = (jwt, {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  }) => {
    return mainApi.saveArticle(jwt, {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    })
  }

  const deleteArticleRequest = (jwt, id) => {
    return mainApi.deleteArticle(jwt, id);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    setLoggedIn(!!jwt);
    mainApi.getUserInfo(jwt)
      .then((res) => {
        setUser({
          ...user,
          name: res.name,
          email: res.email,
        });
      })
      .catch((err) => console.log(err));
  }, [loggedIn])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={user}>
        <Header loggedIn={loggedIn} auth={changeLoggedInStatus} theme={light} openLogin={setLoginIsOpen} loginPopup={loginIsopen}/>
        <Switch>
          <Route exact path='/'>
            <Main openLogin={setRegIsOpen} request={newsRequest} header={setLight} loggedIn={loggedIn} notFound={notFound} setResult={setNotFound} saveArticleRequest={saveArticleRequest} deleteArticle={deleteArticleRequest}/>
          </Route>
          <ProtectedRoute exact path='/saved-news'
            loggedIn={loggedIn}
            component={SavedNewsheader}
            secondComponent={SavedNews}
            header={setLight}
            articles={savedArticles}
            deleteArticle={deleteArticleRequest}
            saved={savedArticles}
            setSaved={setSavedArticles}
          />
        </Switch>
          <LoginPopup isOpen={loginIsopen} link={setRegIsOpen} close={setLoginIsOpen} handleLogin={login} setLoggedIn={setLoggedIn}/>
          <RegisterPopup isOpen={regIsopen} link={setLoginIsOpen} close={setRegIsOpen} succes={setSuccesIsOpen} handleRegister={register}/>
          <PopupSucces isOpen={succesIsopen} close={setSuccesIsOpen} link={setLoginIsOpen}/>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
