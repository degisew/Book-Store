import React from "react";
import { useSelector } from "react-redux";
import AddBook from "./AddBook";
import Book from "./Book";

function BooksPage() {
  const selector = useSelector((state) => state.books);
  return (
    <div className="books-container">
      {selector.books.map((book) => (
        <Book title={book.title} key={book.id} />
      ))}
      <AddBook />
    </div>
  );
}

export default BooksPage;
