import { FileTypes } from './data';

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, callback) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(callback);
  }

  emit(type, arg) {
    this.events[type].forEach(callback => callback(arg));
  }
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function showMessage(title, msg, type) {
  const workArea = document.getElementById('work-area');
  const messageBox = document.getElementById('dialogMessage');

  messageBox.children[0].innerHTML = title;
  messageBox.children[1].innerHTML = msg;
  messageBox.classList.add(type);

  workArea.style.opacity = '0.5';
  messageBox.style.left = '35%';
  messageBox.style.top = '15%';
  messageBox.style.display = 'block';

  messageBox.addEventListener('mousedown', event => {
    document.onmousemove = e => {
      messageBox.style.left = e.pageX - messageBox.offsetWidth / 2 + 'px';
      messageBox.style.top = e.pageY - messageBox.offsetHeight / 2 + 'px';
    };

    document.onmouseup = () => {
       document.onmousemove = null;
       messageBox.onmouseup = null;
    };
  });

  messageBox.getElementsByClassName('dialog-btn')[0].onclick = () => {
    workArea.style.opacity = '1';
    messageBox.style.display = 'none';
  }
}

function createItemTag(item) {
  const tag = document.createElement('div');

  tag.className = 'icon';
  tag.setAttribute('dragable', '');
  tag.setAttribute('data-id', item.id);
  tag.setAttribute('data-type', item.type);
  tag.setAttribute('title', FileTypes[item.type].descr);
  tag.style.top = item.posY + 'px';
  tag.style.left = item.posX + 'px';
  tag.style.backgroundImage = 'url(./img/icons/' + FileTypes[item.type].img + ')';

  tag.style.width = (item.size || 60) + 'px';
  tag.style.height = (item.size || 60) + 'px';

  const itemTitle = document.createElement('div');
  itemTitle.classList.add('item-title');
  itemTitle.innerText = item.title;

  tag.append(itemTitle);

  return tag;
}

function getItem(itemTag) {
  const item = {};
  item.id = itemTag.getAttribute('data-id');
  item.type = itemTag.getAttribute('data-type');
  item.title = itemTag.getElementsByClassName('item-title')[0].innerText;
  item.posY = parseInt(itemTag.style.top);
  item.posX = parseInt(itemTag.style.left);

  return item;
}



//Test for event emitter function
/*
class TestEmitter extends EventEmitter {
  constructor() {
    super();
  }

  doSmth() {
    let rand = Math.random();
    this.emit('rand', rand);
  }
}

const testEmit = new TestEmitter();
testEmit.on('rand', alert);
testEmit.on('rand', console.log);
testEmit.on('rand', param => alert(param.toFixed(2)) );
testEmit.doSmth();
*/

export { EventEmitter, getCookie, setCookie, showMessage, createItemTag, getItem };
