import React from 'react'
import porkandspoon from '/porkandspoon.png'
import search from '/search.png'

const MainHome = () => {
  return (
    <div className="px-5">
            <div
            className="w-full h-[600px] bg-cover bg-center rounded-xl flex flex-col justify-center px-40"
            style={{
                backgroundImage: 'url(/homebg.jpg)',
            }}> 
              <div className="w-[750px] space-y-5 -mt-18">
                <h1 className='font-bold text-5xl leading-15 -ml-1.5'>You don't know how to make the dish you have in mind?</h1>
                <span className='font-medium'>Feed your imagination and spark your creativity. From cravings to creations, let your <br /> 
                ideas flourish and uncover the perfect recipe waiting to be discovered.</span>
                <div className='mt-5 flex bg-white w-[670px] h-[70px] px-3 py-5 rounded-lg items-center '>
                  <img src={porkandspoon} alt="" className='w-7' />
                  <input type="text" placeholder='Find what do you want to cook today' className='flex-1 border-none outline-none px-5'/>
                   <button className='cursor-pointer'><img src={search} alt="" className='w-12' /></button>
                </div>
                <span className='text-slate-600 text-sm'>Type a keyword and discover recipes that turn your cravings into delicious reality!</span>
              </div>
            </div>
    
        </div> 
  )
}

export default MainHome