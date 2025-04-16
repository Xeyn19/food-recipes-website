import React from 'react'
import { useState, useEffect } from 'react'
import rateicon from '/rate-icon.png'

const Foods = ({ category }) => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const fetchFoods = async () => {
            setLoading(true);
            try{
                const response = await fetch('/Foods.json');
                if(!response.ok) throw new Error('Network response was not ok');
                setFoods(await response.json());
            }catch(error){
                console.error('Error fetching data', error);
            }finally{
                setLoading(false);
            }
        }
        fetchFoods();
    }, [])

const filteredFoods = 
category === 'All'
? foods
: category === 'Others'
    ? foods.filter(food => !['Chicken', 'Pork', 'Seafood'].includes(food.subname))
    : foods.filter(food => food.subname === category);


if(loading)(
    <div className="flex min-h-screen justify-center items-center">Loading ...</div>
)

  return (
    <>
        {filteredFoods.map((food) => (
             <div key={food.id} className="card bg-base-100 w-95 shadow-md max-md:w-80 max-xl:w-85">
            
             <figure>
             <img
                 src={food.image}
                 alt="Shoes" 
                 className='w-full h-70'
                 />
             </figure>
             <div className="card-body">
                <h4 className='text-primary-color font-medium'>{food.subname}</h4>
                <h2 className="card-title">{food.name}</h2>
                <div className="flex items-center space-x-1">
                    <img src={rateicon} alt="" className='w-4' />
                    <h4 className='text-slate-500 my-auto text-md'>{food.rating}</h4>
                </div>
             <div className="card-actions justify-end">
                 <button className="border border-gray-300 px-4 cursor-pointer font-bold ease-in duration-150 transition-all
                 py-3 rounded-lg hover:bg-primary-color hover:text-white">Check Recipe</button>
             </div>
             </div>
         </div>
        )) 
        }
  </>
  )
}

export default Foods