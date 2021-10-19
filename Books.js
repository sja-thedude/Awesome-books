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
    return ` <tr>
              <td>${this.title} by ${this.author}</td>
              <td><button class='remove' data-id='${this.id}'>Remove</td>
              </tr>`;
  }

  static add(book) {
    const bookItems = this.getAllBooks();
    let id = 1;
    if (bookItems.length > 0) {
      id = bookItems[bookItems.length - 1].id + 1;
    }
    book.id = id;
    bookItems.push(book);
    saveToLocalStorage('bookItems', bookItems);
  }

  static remove(id) {
    let bookItems = this.getAllBooks();
    bookItems = bookItems.filter((b) => b.id !== Number(id));
    saveToLocalStorage('bookItems', bookItems);
  }

  static getAllBooks() {
    let bookItems = getFromLocalStorage('bookItems');
    if (bookItems === null) {
      bookItems = [];
    }
    return bookItems;
  }
}
