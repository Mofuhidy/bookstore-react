import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';

const style = { color: '#0290ff', fontSize: '1.5em' };
function Navbar() {
  return (
    <nav className="flex justify-start px-24 h-24 items-center w-full bg-white border-b-gray-100 border-b-2 border-solid">
      <div className=" text-2xl text-[#0290ff] w-64 font-bold">Bookstore CMS</div>
      <div className="flex justify-between w-full ml-16">
        <ul className="list-none flex gap-6 items-center">
          <li>
            <NavLink to="/" className=" text-gray-400 aria-[current=page]:text-black">Books</NavLink>
          </li>
          <li>
            <NavLink to="/categories" className=" text-gray-400 aria-[current=page]:text-black">Categories</NavLink>
          </li>
        </ul>
        <div className="border-gray-100 border-2 border-solid rounded-full p-2">
          <IoMdPerson style={style} />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
