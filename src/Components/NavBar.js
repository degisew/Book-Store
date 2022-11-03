import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="./BooksPage" className="link">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="./Categories" className="link">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
