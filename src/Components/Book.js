/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Books/Books';
function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="single-book-container">
      <h3>{ book.title }</h3>
      <button type="button" onClick={() => dispatch(remove(book.id))} className="del-btn">Delete</button>
    </div>
  );
}

export default Book;
