import { showMessage } from './helpers';
import { FileTypes } from './data';

import MultiDesktops from './components/panel/MultiDesktops';
import UserData from './components/panel/UserData';
import SettingsWindow from './components/panel/SettingsWindow'

export default class PanelMenu {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Settings for user data
    new UserData();

    // Loading of existed desktops from localStorage
    new MultiDesktops(this.model);    

    // Open settings window
    new SettingsWindow();

    // Search module
    const search = document.getElementById('search');
    search.onclick = () => this.search();

    // Unavailable items
    const menuItems = document.querySelectorAll('.subMenu li');
    menuItems.forEach(item => {
      if (item.onclick == undefined || item.onclick == null) {
        item.onclick = () => showMessage(item.innerText, 'Sorry, this function is not available yet :(', 'info');
      }
    });

    // Handling existed menu elements
    document.getElementById('menuCreate').onclick = this.view.create.bind(this.view);
    document.getElementById('menuSearch').onclick = this.search.bind(this);

    // Change icon size
    document.getElementById('iconSize').onchange = (event) => this.view.changeIconSize(event.target.value);

    // Wallpaper
    if( window.File && window.FileList) {
      document.getElementById('wallpaperFile').onchange = this.changeWallpapers.bind(this);
    } else {
      console.error('Your browser doesn\'t support Files API!');
    }
  }

  changeWallpapers(event) {
    const img = document.createElement('img');
    img.src = window.URL.createObjectURL(event.target.files[0]);
    img.height = 100;
    img.width = 200;

    const previewWallpaper = document.getElementById('previewWallpaper');
    previewWallpaper.innerHTML = '';
    previewWallpaper.append(img);

    const changeBtn = document.createElement('button');
    changeBtn.innerText = 'Change';
    changeBtn.onclick = () => document.getElementById('work-area').style.backgroundImage = 'url(' + img.src + ')';
    previewWallpaper.append(changeBtn);
  }

  search() {
    const searchDialog = document.getElementById('searchDialog');
    const searchResults = document.getElementById('search-results');

    const searchClose = searchDialog.querySelector('.search-close');
    searchClose.onclick = () => searchDialog.style.display = 'none';

    searchDialog.style.display = 'block';

    searchDialog.querySelector('input[name=query]').onfocus = (event) => {
      event.target.onkeyup = () => {
        searchResults.innerHTML = '';

        let query = event.target.value;
        if (query.length > 0) {
          let result = this.model.find( query );

          if (result.length > 0) {
            result.forEach(item => {
              searchResults.innerHTML += `<div class="search-result"><img src="./img/icons/${FileTypes[item.type].img}" width="25" height="25">${item.title} (${item.id})</div>`;
            });
          } else {
            searchResults.innerHTML = 'Nothing found.'
          }
        }
      }
    };
  }

}
