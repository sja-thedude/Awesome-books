const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

function codeForSingleBook(book) {
  return `<div>${book.title}</div>
            <div>${book.author}</div>
            <button class='remove' data-id='${book.id}'>Remove</button>
            <hr>`;
}

function displayBooks() {
  let bookItems = getFromLocalStorage('bookItems');

  if (bookItems == null) {
    bookItems = [];
  }

  const booksCode = bookItems.map((book) => codeForSingleBook(book));
  document.getElementById('bitems').innerHTML = booksCode.join('');

  const removeButtons = Array.from(document.querySelectorAll('.remove'));
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');
      bookItems = bookItems.filter((b) => b.id !== Number(id));
      saveToLocalStorage('bookItems', bookItems);
      displayBooks();
    });
  });
}

displayBooks();

const titleInput = document.getElementById('btitle');
const authorInput = document.getElementById('bauthor');
document
  .getElementById('bookslist')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    let bookItems = getFromLocalStorage('bookItems');
    if (bookItems == null) {
      bookItems = [];
    }
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    let id = 1;
    if (bookItems.length > 0) {
      id = bookItems[bookItems.length - 1].id + 1;
    }
    if (!title || !author) {
      return;
    }
    bookItems.push({
      id,
      title,
      author,
    });
    saveToLocalStorage('bookItems', bookItems);
    displayBooks();
  });
