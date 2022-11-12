import React from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

function NavBar() {
  return (
    <header>
      <div className="logo-ul-div">
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
      </div>
      <BiUserCircle className="svg-user" />
    </header>
  );
}

export default NavBar;
