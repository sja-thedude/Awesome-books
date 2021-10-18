/* eslint-disable */

function displayBooks() {
  const bookItems = Bclasses.getAllBooks();

  const booksCode = bookItems.map((book) => new Bclasses(book.title, book.author, book.id).getCode());
  document.getElementById('bitems').innerHTML = booksCode.join('');

  const removeButtons = Array.from(document.querySelectorAll('.remove'));
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');
      Bclasses.remove(id);
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
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (!title || !author) {
      return;
    }

    const book = new Bclasses(title, author);
    Bclasses.add(book);
    displayBooks();
  });
