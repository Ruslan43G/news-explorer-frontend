class MainApi {
  constructor ({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  signin ({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
  }

  signup ({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
  }

  getUserInfo (token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    })
    .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
  }

  showArticles(token) {
    return fetch(`${this._url}/articles`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    })
    .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.rus.students.nomoreparties.xyz',
  headers: {
    "Content-Type": "application/json"
  },
})

export default mainApi;
