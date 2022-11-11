import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Categories/Categories';

function Categories() {
  const selector = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div className="categories-container">
        <button
          type="button"
          onClick={() => {
            dispatch(checkStatus('book'));
          }}
        >
          Check Status
        </button>
        {selector.categories.length !== 0 ? (
          <h4>{selector.categories[0]}</h4>
        ) : (
          <h4>nothing yet!</h4>
        )}
      </div>
    </>
  );
}

export default Categories;
