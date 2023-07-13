import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex">
      <h1 className=" text-2xl">Bookstore CMS</h1>
      <ul className="list-none flex">
        <li className=" text-red-700">
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
