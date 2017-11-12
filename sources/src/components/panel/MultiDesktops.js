import { createItemTag, showMessage } from '../../helpers';
import { DemoDesktop } from '../../data';

export default class MultiDesktops {
  constructor(model) {
    this.model = model;
    this.workArea = document.getElementById('work-area');
    this.desktopsSettings = document.getElementById('desktopsSettings');
    this.desktopsCount = 2;

    while(localStorage.getItem(`state${this.desktopsCount}`) != null) {
      this.addDesktop(this.desktopsCount);
    }

    // First desktop initialization
    this.DemoDesktopInit();

    const addDesktop = document.getElementById('addDesktop');
    addDesktop.onclick = () => this.addDesktop();

    const saveBtns = this.desktopsSettings.querySelectorAll("button[data-save]");
    const loadBtns = this.desktopsSettings.querySelectorAll("button[data-load]");

    for (let i = 0; i < saveBtns.length; i++) {
      saveBtns[i].onclick = () => this.model.save(i + 1);
    }

    for (let i = 0; i < loadBtns.length; i++) {
      loadBtns[i].onclick = () => this.loadIcons(i + 1);
    }
  }

  addDesktop() {
    const table = this.desktopsSettings.getElementsByTagName("table")[0];
    const desktop = this.desktopsCount;

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('data-save', desktop);
    saveBtn.innerText = `Save desktop ${desktop}`;
    saveBtn.onclick = () => this.model.save(desktop);
    td1.append(saveBtn);

    const td2 = document.createElement('td');
    const loadBtn = document.createElement('button');
    loadBtn.setAttribute('data-load', desktop);
    loadBtn.innerText = `Load desktop ${desktop}`;
    loadBtn.onclick = () => this.loadIcons(desktop);
    td2.append(loadBtn);

    tr.append(td1, td2);
    table.append(tr);

    this.desktopsCount++;
  }

  clearDesktop() {
    const icons = this.workArea.getElementsByClassName('icon');

    for (let i = 0; i < icons.length; i++) {
      icons[i].parentNode.removeChild(icons[i]);
    }

    this.model.items = [];
  }

  loadIcons(id) {
    this.clearDesktop();

    const items = this.model.load(id);
    items.forEach(item => {
      let tag = createItemTag(item);
      this.workArea.append(tag);
    });

    this.model.items = items;
  }

  DemoDesktopInit() {
    const firstMessage = `
      <p>That's a simple model of an operating system. There are a lot of visual features which can help waste your time.</p>
      <p>You can play with icons, change different settings and more...</p>
      <p>We recommend you to test the Search with "liveload" respond and see what's happening in the world on the right panel.</p>
      <p>Have a good time :)</p>
      <input type="checkbox" id="firstLoad"> Load default desktop state
    `;
    showMessage('Welcome', firstMessage, 'info');

    document.getElementById('dialogMessage').getElementsByClassName('dialog-btn')[0].addEventListener('click', () => {
      const firstLoad = document.getElementById('firstLoad');
      if (firstLoad.checked) {
        DemoDesktop.forEach(item => {
          this.model.addItem(item);
          this.workArea.append(createItemTag(item));
        });
      }
    });
  }
}
