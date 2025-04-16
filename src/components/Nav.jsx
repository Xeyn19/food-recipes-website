import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logo.png'

const Nav = () => {
  return (
    <>
      <nav className='w-full py-5 px-20'>
        <div className="flex justify-center items-center space-x-15 font-medium">
            <img src={logo} alt="" className='w-25 h-15 rounded-lg cursor-pointer '/>
            <NavLink to='/'
            className={({isActive }) => 
              isActive 
              ? ' text-white bg-primary-color  px-5 py-3 rounded-lg font-bold shadow-primary-color translation-all ease-in duration-100'
              : 'hover:bg-primary-color hover:text-white border border-gray-300 hover:px-5 hover:py-3 hover:rounded-lg text-black font-bold px-5 py-3 rounded-lg translation-all ease-in duration-100 '
            }>Home</NavLink>
             <NavLink to='Recipes'
            className={({isActive }) => 
              isActive 
              ? ' text-white bg-primary-color px-5 py-3 rounded-lg font-bold shadow-primary-color translation-all ease-in duration-100'
              : 'hover:bg-primary-color hover:text-white border border-gray-300 hover:px-5 hover:py-3 hover:rounded-lg text-black font-bold px-5 py-3 rounded-lg translation-all ease-in duration-100 '
            }>Recipes</NavLink>
            <button className='border border-gray-300 px-5 py-3 rounded-lg cursor-pointer text-sm font-bold
            hover:bg-primary-color hover:text-white shadow-white shadow-md translation-all ease-in duration-100'>Add Recipe</button>
        </div>
      </nav>
    </>
  )
}

export default Nav