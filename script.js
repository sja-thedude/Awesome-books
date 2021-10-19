/* eslint-disable */

function displayBooks() {
  const bookItems = Book.getAllBooks();

  const booksCode = bookItems.map((book) => new Book(book.title, book.author, book.id).getCode());
  document.getElementById('bitems').innerHTML = booksCode.join('');

  const removeButtons = Array.from(document.querySelectorAll('.remove'));
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');
      Book.remove(id);
      displayBooks();
    });
  });
}
document
  .getElementById('bookslist')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    const bookItems = Book.getAllBooks();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (!title || !author) {
      return;
    }

    const book = new Book(title, author);
    Book.add(book);
    displayBooks();
  });
