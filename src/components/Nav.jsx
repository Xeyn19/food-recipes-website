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
              ? 'bg-slate-200 text-primary-color px-5 py-3 rounded-lg font-bold shadow-primary-color translation-all ease-in duration-100'
              : 'hover:bg-slate-200 hover:text-primary-color hover:px-5 hover:py-3 hover:rounded-lg text-black font-bold px-5 py-3 rounded-lg translation-all ease-in duration-100 '
            }>Home</NavLink>
             <NavLink to='Recipees'
            className={({isActive }) => 
              isActive 
              ? 'bg-slate-200 text-primary-color px-5 py-3 rounded-lg font-bold shadow-primary-color translation-all ease-in duration-100'
             : 'hover:bg-slate-200 hover:text-primary-color hover:px-5 hover:py-3 hover:rounded-lg text-black font-bold px-5 py-3 rounded-lg translation-all ease-in duration-100 '
            }>Recipes</NavLink>
            <button className='bg-slate-200 px-5 py-3 rounded-lg cursor-pointer text-sm
            hover:bg-red-800 hover:text-white shadow-white shadow-md translation-all ease-in duration-100'>Add Recipe</button>
        </div>
      </nav>
    </>
  )
}

export default Nav