import { FileTypes } from './data';
import { EventEmitter, showMessage, createItemTag, getItem } from './helpers';

export default class View extends EventEmitter {
  constructor() {
    super();

    this.fileTypesInit();

    this.workArea = document.getElementById('work-area');

    this.iconSize = 60;
    this.posX = 0;
    this.posY = 0;

    this.workArea.addEventListener('contextmenu', this.contextMenu.bind(this));
    this.workArea.addEventListener('mousedown', this.move.bind(this));

    document.body.addEventListener("keydown", this.insertByKey.bind(this), false);
  }

  move(event) {
    const activeElem = event.target;
    const self = this;

    if (activeElem.getAttribute('dragable') != null) {
      activeElem.style.position = 'absolute';
      activeElem.style.cursor = 'move';
      self.workArea.style.cursor = 'move';

      document.onmousemove = e => {
        activeElem.style.left = e.pageX - activeElem.offsetWidth / 2 + 'px';
        activeElem.style.top = e.pageY - activeElem.offsetHeight / 2 + 'px';
      };

      document.onmouseup = () => {
        self.workArea.style.cursor = 'default';
        activeElem.style.cursor = 'pointer';
        document.onmousemove = null;
        activeElem.onmouseup = null;

        this.emit('update', getItem(activeElem));
      };
    }
  }

  contextMenu(event) {
      this.posX = event.clientX;
      this.posY = event.clientY;

      event.preventDefault();

      const activeElem = event.target;
      let toolMenu = document.getElementById('toolMenu');

      if (activeElem === this.workArea) {

        document.getElementById('addNew').onclick = this.create.bind(this);
        document.getElementById('insert').onclick = this.insert.bind(this);
        document.getElementById('reset').onclick = this.reset.bind(this);

      } else {
        toolMenu = document.getElementById('elemMenu');

        document.getElementById('deleteElem').onclick = () => {
          const id = activeElem.getAttribute('data-id');
          activeElem.remove();
          this.emit('remove', parseInt(id));
        }

        document.getElementById('copyElem').onclick = () => {
          this.bufferElement = activeElem.cloneNode(true);
        }

        document.getElementById('cutElem').onclick = () => {
          this.bufferElement = activeElem.cloneNode(true);
          activeElem.remove();
        };

        document.getElementById('retypeElem').onclick = this.create.bind(this, event, activeElem);

        document.getElementById('infoElem').onclick = () => {
          const itemType = activeElem.getAttribute('data-type');
          const typeInfo = FileTypes[itemType];

          showMessage(`<img src="./img/icons/${typeInfo.img}" height="22" width="22"> ` + typeInfo.nameRu + ` <img src="./img/icons/${typeInfo.img}" height="22" width="22">`, typeInfo.info, 'info');
        }
      }

      toolMenu.style.display = 'block';
      toolMenu.style.top = event.pageY - toolMenu.offsetHeight + 'px';
      toolMenu.style.left = event.pageX + 'px';

      document.addEventListener('click', () => toolMenu.style.display = 'none');
  }

  create(event, itemTag) {
    this.workArea.style.opacity = '0.5';

    const createDialog = document.getElementById('createDialog');
    createDialog.style.left = '35%';
    createDialog.style.top = '15%';
    createDialog.style.display = 'block';

    if(itemTag != undefined) {
      const item = getItem(itemTag);

      document.forms.createForm.elements.nameElement.value = item.title;
      document.getElementsByName('chooseType')[0].value = item.type;
    }

    document.getElementById('createFormClose').onclick = closeCreateDialog.bind(this);

    document.getElementsByName('createForm')[0].onsubmit = event => {
      event.preventDefault();

      const type = document.getElementsByName('chooseType')[0].value;
      const title = document.forms.createForm.elements.nameElement.value || "Untitled";
      const newItem = {
          id: Date.now(),
          type,
          title,
          posX: this.posX,
          posY: this.posY || 28,
          size: this.iconSize
      };

      if(itemTag == undefined) {
        this.emit('create', newItem);
      } else {
        const item = getItem(itemTag);

        newItem.id = item.id;
        newItem.posX = item.posX;
        newItem.posY = item.posY;

        itemTag.remove();
        this.emit('update', newItem);
      }

      this.workArea.append( createItemTag(newItem) );

      (closeCreateDialog.bind(this))();
    };

    function closeCreateDialog() {
      this.workArea.style.opacity = '1';
      createDialog.style.display = 'none';
      return false;
    };
  }

  changeIconSize(size) {
    this.iconSize = parseInt(size);

    const allIcons = document.getElementsByClassName('icon');
    for (let i = 0; i < allIcons.length; i++) {
      allIcons[i].style.width = this.iconSize + 'px';
      allIcons[i].style.height = this.iconSize + 'px';
    }
  }

  fileTypesInit() {
    const selectType = document.getElementsByName('chooseType')[0];
    for (let type in FileTypes) {
      const elem = document.createElement('option');
      elem.setAttribute('value', type);
      elem.setAttribute('title', FileTypes[type].descr);
      elem.innerText = FileTypes[type].name;
      selectType.append(elem);
    }
  }

  insert(e) {
    if (e instanceof KeyboardEvent) {
      this.bufferElement.style.left = parseInt(this.bufferElement.style.left) + this.iconSize + 10 + 'px';
    } else {
      this.bufferElement.style.left = e.pageX - this.bufferElement.offsetWidth / 2 + 'px';
      this.bufferElement.style.top = e.pageY - this.bufferElement.offsetHeight / 2 + 'px';
    }
    this.bufferElement.setAttribute('data-id', Date.now());
    this.workArea.append(this.bufferElement);

    this.emit('create', getItem(this.bufferElement));

    this.bufferElement = this.bufferElement.cloneNode(true);
  }

  insertByKey(event) {
    event = event || window.event;
    var key = event.which || event.keyCode; // keyCode detection
    var ctrl = event.ctrlKey ? event.ctrlKey : ((key === 17) ? true : false); // ctrl detection

    if ( key == 86 && ctrl ) {
        this.insert(event);
    }
  }

  reset() {
    const icons = document.getElementsByClassName('icon');
    const height = this.iconSize + 15,
        firstSpace = 28,
        displayY = document.documentElement.clientWidth;
    let leftSpace = 5;

    for (let i = 0, top = 0; i < icons.length; i++, top++) {
      icons[i].style.top = (height + 5) * top + firstSpace + 'px';

      if (parseInt(icons[i].style.top) >= 600) {
        leftSpace += height + 5;
        top = 0;
        icons[i].style.top = firstSpace + 'px';
      }

      icons[i].style.left = leftSpace + 'px';

      this.emit('update', getItem(icons[i]));
    }
  }
}
