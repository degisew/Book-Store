import React from 'react'

function Book(props) {
  return (
    <div className='single-book-container'>
      <h3>{ props.title }</h3> 
      <button type='button' className='del-btn'>Delete</button>
    </div>
  )
}

export default Book
