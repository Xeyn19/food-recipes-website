import React from 'react'
import Foods from '../components/Foods'
import { NavLink } from 'react-router-dom'

const RecipeesPage = () => {
  return (
    <>
        <div className='min-h-screen bg-slate-100 pb-40 rounded-lg shadow-md'>
          <div className="flex items-center flex-col w-full">
            <div className="text-center py-20 space-y-5 bg-white shadow-md max-xl:w-full max-md:m-auto max-md:px-5 max-xl:px-40">
              <h4 className='font-medium text-sm'>RECIPES FOR EVERY TASTE</h4>
              <h3 className='font-medium text-4xl'>Recipes</h3>
              <p className='w-[1000px] text-slate-600 max-xl:w-full '>Browse a wide variety of recipes designed for every taste and skill level. From comforting classics to creative <br /> culinary delights, find the perfect dish to inspire your next meal!</p>
            </div>
            <div className="space-x-5 py-10 max-md:grid max-md:grid-cols-2 max-md:space-x-0 max-md:gap-3">
              <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg max-md:px-3 max-md:py-2 font-medium text-white '
              : 'border border-gray-300 px-5 py-3 max-md:text-sm max-md:px-3 max-md:py-2 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
             <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg max-md:px-3 max-md:py-2 font-medium text-white '
              : 'border border-gray-300 px-5 py-3 max-md:text-sm max-md:px-3 max-md:py-2 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
             <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg max-md:px-3 max-md:py-2 font-medium text-white '
              : 'border border-gray-300 px-5 py-3 max-md:text-sm max-md:px-3 max-md:py-2 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
             <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg max-md:px-3 max-md:py-2 font-medium text-white '
              : 'border border-gray-300 px-5 py-3 max-md:text-sm max-md:px-3 max-md:py-2 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
            </div>
            
          </div>
          <div className="w-full flex py-10 justify-center max-md:m-auto max-xl:m-auto">
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-xl:grid-cols-2">
              <Foods /> 
            </div>
          </div>
          
        </div>
    </>
    
  )
}

export default RecipeesPage