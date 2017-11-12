import './sass/main.sass';

import Model from './Model';
import View from './View';
import PanelMenu from './PanelMenu';

import News from './components/news/NewsModel';
import NewsView from './components/news/NewsView';

import './polyfill'; 

// Main class for manage all elements
const model = new Model();
const view = new View();
const panelMenu = new PanelMenu(model, view);

// News module
const newsView = new NewsView();
const news = new News('73aca4de0be34cc1ab1ee23e7f9a6f1f', newsView.load.bind(newsView), newsView.unload.bind(newsView));

const chooseSource = document.getElementById('newsSource');
chooseSource.onchange = () => news.request(chooseSource.value, 'top');

// Init news
news.request('cnn', 'top');

news.getSources(newsView.showSources.bind(newsView));

// Handling the view events by model functions
view.on('create', model.addItem.bind(model));
view.on('remove', model.removeItem.bind(model));
view.on('update', model.updateItem.bind(model));

// Timer for the top panel
(function() {
const time = document.getElementById('time');
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

setInterval(() => {
  const currentDate = new Date();
  time.innerText = currentDate.toLocaleString("en-US", options); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM
}, 1000); })();
