import React from 'react'
import Foods from '../components/Foods'
import { NavLink } from 'react-router-dom'

const RecipeesPage = () => {
  return (
    <>
        <div className='min-h-screen bg-slate-100 rounded-lg shadow-md'>
          <div className="flex items-center flex-col w-full">
            <div className="text-center py-20 space-y-5 bg-white shadow-md">
              <h4 className='font-medium text-sm'>RECIPES FOR EVERY TASTE</h4>
              <h3 className='font-medium text-4xl'>Recipes</h3>
              <p className='w-[1000px] text-slate-600'>Browse a wide variety of recipes designed for every taste and skill level. From comforting classics to creative <br /> culinary delights, find the perfect dish to inspire your next meal!</p>
            </div>
            <div className="space-x-5 py-10">
              <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg font-medium text-white '
              : 'border border-gray-300 px-5 py-3 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
             <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg font-medium text-white '
              : 'border border-gray-300 px-5 py-3 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
             <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg font-medium text-white '
              : 'border border-gray-300 px-5 py-3 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
             <NavLink to='6' className={({isActive}) => 
                isActive 
              ? 'border bg-primary-color px-5 py-3 rounded-lg font-medium text-white '
              : 'border border-gray-300 px-5 py-3 hover:bg-primary-color hover:text-white rounded-lg text-black font-bold'
              }>All Recipees</NavLink>
            </div>
            
          </div>
          <div className="px-5 py-10">
            <div className="">
              <Foods /> 
            </div>
          </div>
          
        </div>
    </>
    
  )
}

export default RecipeesPage