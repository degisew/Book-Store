import React from 'react';
import AddBook from './AddBook';

function BooksPage() {
  return (
    <div className="books-container">
      {/* {books.map((book) => (
        <Book title={book.title} key={book.id} />
      ))} */}
      <AddBook />
    </div>
  );
}

export default BooksPage;
