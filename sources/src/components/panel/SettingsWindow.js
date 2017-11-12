export default class SettingsWindow {
  constructor() {
    document.getElementById('settingsOpen').onclick = this.open.bind(this);
  }

  open(e) {
    e.preventDefault();

    const settingsDialog = document.getElementById('settingsDialog');
    settingsDialog.style.display = 'block';

    document.getElementById('closeSettings').onclick = () => settingsDialog.style.display = 'none';

    // tabs
    this.tabs = document.getElementsByClassName('tab');
    this.tabContent = document.getElementsByClassName('tab-content');

    document.getElementById('tab-panel').onclick = this.tabsClicker.bind(this);
  }

  tabsClicker(event) {
    const target = event.target;

    if (target.className == 'tab') {
      for (var i = 0; i < this.tabs.length; i++) {
        if (target === this.tabs[i]) {
          this.hideAllTabs();
          this.tabs[i].classList.add('active');
          this.tabContent[i].classList.remove('hide');
          break;
        }
      }
    }
  }

  hideAllTabs() {
    for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].classList.remove('active');
        this.tabContent[i].classList.add('hide');
    }
  }
}
