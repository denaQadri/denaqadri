const handleDelete = (id)=> {
   fetch(`https://books-api.sociumtech.com/books/${id}`, { method: 'DELETE' })
       .then(response => {
           if (response.ok) {
               setBooks(books.filter(book => book.id !== id));
           }
       })
       .catch(error => console.error(error));
};