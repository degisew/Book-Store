/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";
import { removeBookThunk } from "../redux/Books/Books";
import progress from '../assets/images/progress.png';
function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="single-book-container">
      <div className="book-details-div">
        <div>
          <p className="category">{book.category}</p>
          <h2>{book.title}</h2>
          <p className="author">{book.author}</p>
        </div>
        <div className="btns-div">
          <button type="button" className="comment-btn">
            Comments  |
          </button>

          <button
            type="button"
            onClick={() => dispatch(removeBookThunk(book.item_id))}
            className="del-btn"
          >
            Remove  |
          </button>

          <button type="button" className="edit-btn">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-div">
        <div className="progress-image-div">
          <img src={progress} alt="progress-image" />
        </div>
        <div className="percent-complete-div">
          <span className="percent-span">70%</span>
          <br />
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter-div">
        <p>Current Chapter</p>
        <p> Chapter 17 </p>
        <button type="button" className="btn-update">Update Progress</button>
      </div>
    </div>
  );
}

export default Book;
