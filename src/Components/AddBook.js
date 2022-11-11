import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add } from '../redux/Books/Books';

function AddBook() {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const onChangeHandler = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    }));
  };
  // const selector = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      <form action="#" className="form">
        <input
          name="title"
          type="text"
          value={input.title}
          placeholder="title"
          onChange={onChangeHandler}
        />
        <input
          name="author"
          type="text"
          value={input.author}
          placeholder="author"
          onChange={onChangeHandler}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(add(input));
            setInput({
              title: '',
              author: '',
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBook;
