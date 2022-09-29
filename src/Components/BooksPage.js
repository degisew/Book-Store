import React from 'react'
import { v4 as uuidv4 } from "uuid";
import AddBook from "./AddBook";
import Book from './Book';
function BooksPage(props) {
  const books = [
    {
      id: uuidv4(),
      title: "Zamra",
      author: "Yismake",
    },
    {
      id: uuidv4(),
      title: "Merbebit",
      author: "Alemayehu",
    },
    {
      id: uuidv4(),
      title: "Dertogada",
      author: "Yismake",
    },
    {
      id: uuidv4(),
      title: "Zubeyda",
      author: "Alex",
    },
    {
      id: uuidv4(),
      title: "Hashmal",
      author: "Maebel",
    },
  ];
  return (
    <div className='books-container'>
      {books.map((book) => (
        <Book title={book.title} key={book.id} />
      ))}
      <AddBook />
    </div>
  );
}

export default BooksPage;
