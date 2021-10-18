const titleInput = document.querySelector('btitle');
const authorInput = document.querySelector('bauthor');

document.getElementById('bookslist')
        .addEventListener('submit', function(event){
          event.preventDefault();

        const ourbooks = getFromLocalStorage('ourbooks');

        if(ourbooks == null){
          ourbooks = [];
        }

        let title = titleInput.value.trim();
        let author = authorInput.value.trim();
        let id = 1;

        if(ourbooks.length > 0){
          id = ourbooks[ourbooks.length -1].id + 1;
        }

        if(!title || !author){
          return;
        }

        ourbooks.push({
          id: id,
          title: title,
          author: author
        });
        
        }