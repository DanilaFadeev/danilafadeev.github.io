export default class NewsView {
  constructor() {
    this.newsPanel = document.getElementById('newsBlock');
    this.newsPanel.oncontextmenu = () => false;
  }

  load(data) {
    let newsHTML = '';

    data.forEach(article => {
      newsHTML += `<div class="article clearfix">
        <div class="left">
          <div class="article_title"><a href="${article.url}" target="_blank">${article.title}</a></div>
          <div class="article_descr">${article.description}</div>
        </div>
        <div class="right">
          <div class="article_img"><img src="${article.urlToImage}" alt=""></div>
        </div>
      </div>`;
    });

    this.newsPanel.innerHTML = newsHTML;
  }

  unload(error) {
    this.newsPanel.innerText = 'Sorry, something gone wrong..';
    console.error(`${error['code']} ${error['text']}`);
  }

  showSources(sources) {
    const chooseSource = document.getElementById('newsSource');

    sources.forEach(source => {
      let option = document.createElement('option');
      option.setAttribute('value', source.id);
      option.innerText = source.name;

      chooseSource.append(option);
    });
  }
}
