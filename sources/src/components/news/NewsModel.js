export default class NewsModel {
  constructor(apiKey, resolve, reject) {
    this.xhr = new XMLHttpRequest();
    this.apiKey = apiKey;

    this.resolve = resolve;
    this.reject = reject;
  }

  request(source, sort) {
    this.xhr.open('GET', `https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=${this.apiKey}`, true);
    this.xhr.send();

    this.xhr.onload = this.load.bind(this);
    this.xhr.onerror = this.error.bind(this);
  }

  getSources(resolve) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://newsapi.org/v1/sources?language=en', true);
    xhr.send();

    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      const sources = response["sources"];

      resolve(sources);
    };
  }

  load() {
    const response = JSON.parse(this.xhr.responseText);
    const articles = response["articles"];

    if (articles.length > 0) {
      this.resolve(articles);
    }
  }

  error() {
    this.reject({
      code: this.xhr.status,
      text: this.xhr.statusText
    });
  }
}


// 73aca4de0be34cc1ab1ee23e7f9a6f1f
