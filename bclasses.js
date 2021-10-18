const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

class Book {
  constructor(title, author, id = undefined) {
    this.title = title;
    this.author = author;
    if (id !== undefined) {
      this.id = id;
    }
  }

  getCode() {
    return `<div>${this.title}</div>
              <div>${this.author}</div>
              <button class='remove' data-id='${this.id}'>Remove</button>
              <hr>`;
  }
