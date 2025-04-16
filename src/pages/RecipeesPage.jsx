import React from 'react'
import Foods from '../components/Foods'
import { useState } from 'react'


const categories = ['All', 'Chicken', 'Pork', 'Seafood', 'Others'];

const RecipeesPage = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
        <div className='min-h-screen bg-slate-100 pb-40 rounded-lg shadow-md'>
          <div className="flex items-center flex-col w-full">
            <div className="text-center py-20 space-y-5 bg-white shadow-md max-xl:w-full max-md:m-auto max-md:px-5 max-xl:px-40">
              <h4 className='font-medium text-sm'>RECIPES FOR EVERY TASTE</h4>
              <h3 className='font-medium text-4xl'>Recipes</h3>
              <p className='w-[1000px] text-slate-600 max-xl:w-full '>Browse a wide variety of recipes designed for every taste and skill level. From comforting classics to creative <br /> culinary delights, find the perfect dish to inspire your next meal!</p>
            </div>
            <div className="space-x-6 py-10  max-md:space-x-4">
              {categories.map((category, index) => (
                <button key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-3 rounded-lg font-bold border cursor-pointer max-md:text-sm max-md:px-3 max-md:py-2 ease-in duration-150 transition-all
                    ${
                      selectedCategory === category 
                    ? 'bg-primary-color text-white'
                    : 'border-gray-300 text-black hover:bg-primary-color hover:text-white'
                  }`}
                >
                {category}
                </button>
              ))}
            </div>
            
          </div>
          <div className="w-full flex py-10 justify-center max-md:m-auto max-xl:m-auto">
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-xl:grid-cols-2">
              <Foods category={selectedCategory} /> 
            </div>
          </div>
          
        </div>
    </>
    
  )
}

export default RecipeesPage