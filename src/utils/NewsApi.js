class NewsApi {
  constructor ({ baseUrl, key }) {
    this._url = baseUrl;
    this._key = key;
  }

  searchRequest (keyword) {
    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    console.log(today);
    const sevenDays = date.getDate() - 7;
    date.setDate(sevenDays);
    const weekAgo = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    console.log(weekAgo)
    console.log(this._key);

    return fetch(`${this._url}?language=ru&q=${keyword}&from=${weekAgo}&to=${today}&pageSize=100&apiKey=${this._key}`, {
      method: 'GET'
    })
      .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
  }
}

const newsApi = new NewsApi({baseUrl: 'https://newsapi.org/v2/everything', key: '702b3d59d78340098c0ec1818e26c34c' });

export default newsApi;
