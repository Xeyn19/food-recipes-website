import React from 'react'
import { useNavigate } from 'react-router-dom'

const SecondHome = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen max-xl:min-h-[700px] p-15 max-xl: max-xl:p-0 max-xl:mt-20 '>
         <div
          className="w-full h-[600px] max-xl:w-full max-xl:rounded-none flex flex-col justify-center  items-end bg-cover max-md:bg-center rounded-xl shadow-md
          "
          style={{
            backgroundImage: 'url(/secondhomebg.png)',
          }}
          >
            <div className="w-[700px] max-xl:w-full max-xl:p-10 p-5 space-y-8 max-xl:text-center ">
                <h1 className='text-5xl font-semibold leading-15 max-md:text-3xl max-md:leading-none'>Discover fresh and easy recipes to inspire your meals every day.</h1>
                <p className='text-md font-md pr-15 max-md:text-sm max-md:pr-0'>Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!</p>
                <button onClick={() => navigate('/Recipes')}
                className='bg-white  text-black px-5 py-3 max-md:px-3 max-md:py-2  rounded-lg cursor-pointer font-bold
             hover:bg-primary-color hover:text-white  ease-in transition-all duration-150'>View Recipes</button>
            </div>
        </div>
    </div>
  )
}

export default SecondHome 