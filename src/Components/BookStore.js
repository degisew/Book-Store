import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Categories from './Categories';
import BooksPage from './BooksPage';

function BookStore() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/BooksPage" element={<BooksPage />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default BookStore;
