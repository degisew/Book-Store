import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBookThunk } from '../redux/Books/Books';

function AddBook() {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const [category, setCategory] = useState('fiction');

  const cataChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const onChangeHandler = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      item_id: uuidv4(),
      category,
    }));
  };

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form action="#" className="form">
        <input
          className="inputs"
          name="title"
          type="text"
          value={input.title}
          placeholder="title"
          onChange={onChangeHandler}
        />
        <input
          className="inputs"
          name="author"
          type="text"
          value={input.author}
          placeholder="author"
          onChange={onChangeHandler}
        />
        <select onChange={cataChangeHandler} className="inputs">
          <option value="fiction">Fiction</option>
          <option value="business">Business</option>
          <option value="medicine">Medicine</option>
          <option value="scientific">Scientific</option>
        </select>
        <button
          className="btn-add"
          type="button"
          onClick={() => {
            dispatch(postBookThunk(input));
            setInput({
              title: '',
              author: '',
            });
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
