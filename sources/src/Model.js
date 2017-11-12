export default class Model {
  constructor() {
    this.items = [];
  }

  addItem(elem) {
    const newItem = {};
    newItem.id = elem.id;
    newItem.type = elem.type;
    newItem.title = elem.title;
    newItem.posX = elem.posX || 0;
    newItem.posY = elem.posY || 0;
    newItem.size = elem.size || 60;

    this.items.push(newItem);
  }

  getItem(id) {
    return this.items.find(item => item.id == id);
  }

  removeItem(id) {
    const index = this.items.findIndex((item) => item.id == id);
    if (index != -1) {
      this.items.splice(index, 1);
    }
  }

  updateItem(data) {
    const item = this.getItem(data.id);
    Object.keys(data).forEach(prop => item[prop] = data[prop]);
  }

  save(id) {
    if (localStorage) {
      localStorage.setItem(`state${id}`, JSON.stringify(this.items));
    } else {
      throw new Error('Your browser dosn\'t suppor localStorage!');
    }
  }

  load(id) {
    if (localStorage) {
      return JSON.parse( localStorage.getItem(`state${id}`) );
    } else {
      throw new Error('Your browser dosn\'t suppor localStorage!');
    }
  }

  find(query) {
    return this.items.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) == 0);
  }

}
