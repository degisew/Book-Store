import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import { getBookThunk } from '../redux/Books/Books';

function BooksPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookThunk());
  }, [dispatch]);
  const selector = useSelector((state) => state.books);
  return (
    <div className="books-container">
      {selector.books.map((book) => <Book book={book} key={book.item_id} />)}
      <AddBook />
    </div>
  );
}

export default BooksPage;
