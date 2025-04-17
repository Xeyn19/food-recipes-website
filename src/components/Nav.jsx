import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? 'text-white bg-primary-color px-5 py-3 rounded-lg font-bold shadow transition-all duration-100'
      : 'hover:bg-primary-color hover:text-white border border-gray-300 px-5 py-3 rounded-lg text-black font-bold transition-all duration-100';

  return (
    <nav className='w-full py-5 px-5 md:px-20 bg-white shadow-md'>
      <div className="flex justify-between items-center">

        <img onClick={() => navigate('/')}
        src={logo} alt="Logo" className="w-20 h-12 rounded-lg cursor-pointer" />


        <div className="hidden md:flex space-x-6 items-center font-medium">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/Recipes" className={navLinkClasses}>Recipes</NavLink>
          <button className="border border-gray-300 px-5 py-3 rounded-lg cursor-pointer text-sm font-bold hover:bg-primary-color hover:text-white transition-all duration-100">
            Add Recipe
          </button>
        </div>


        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-3 font-medium">
          <NavLink to="/" className={navLinkClasses} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/Recipes" className={navLinkClasses} onClick={toggleMenu}>Recipes</NavLink>
          <button
            className="border border-gray-300 px-5 py-3 rounded-lg cursor-pointer text-sm font-bold hover:bg-primary-color hover:text-white transition-all duration-100"
            onClick={toggleMenu}
          >
            Add Recipe
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
