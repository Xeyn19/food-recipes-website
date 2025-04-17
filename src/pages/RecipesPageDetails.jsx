import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import rateicon from '/rate-icon.png';
import { useNavigate } from 'react-router-dom';


const RecipesPageDetails = () => {
    const navigate = useNavigate();
    const {foodId} = useParams();
    const [food, setFood] = useState(null);

    useEffect(() => {

        const fetchFoodDetails = async () => {
            try{
                const response = await fetch('/Foods.json')
                const data = await response.json();
                const foundFood = data.find((food) => food.id === parseInt(foodId));
                setFood(foundFood);
            }catch(error){
                console.error('Error fetching details!', error);
            }
        }
        fetchFoodDetails();
    }, [foodId])

if (!food) return <div>No Recipes found.</div>;

  return (
    <>
        <div className="min-h-screen flex justify-center flex-col items-center bg-slate-100 px-30 max-md:px-5  pb-30 pt-10">
            <button onClick={() => navigate('/Recipes')}
            className='border-gray-300 border-2 text-black px-5 py-3 mt-5  mb-12 self-center rounded-lg cursor-pointer font-bold
             hover:bg-primary-color hover:text-white  ease-in transition-all duration-150  '>Go back</button>
            <div className="grid grid-cols-2 gap-5 bg-white px-15 py-15 max-md:px-10 max-xl:px-8  rounded-xl max-md:py-13 shadow-md max-xl:grid-cols-1 max-xl:w-full">
                <div className="w-[530px] h-[530px] max-xl:w-full max-md:h-[300px] max-xl:h-[400px]">
                    <figure className="overflow-hidden rounded-xl w-full h-full">
                        <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
                    </figure>
                </div>

                <div className="flex flex-col justify-center">
                <div className='space-y-2'>
                    <h4 className="text-primary-color font-medium max-md:text-sm">{food.subname}</h4>
                    <h2 className="font-medium text-4xl mb-4 max-md:text-2xl">{food.name}</h2>
                    <div className="flex items-center  space-x-2 mb-6">
                    <img src={rateicon} alt="rating" className="w-5 h-5" />
                    <span className="text-gray-500 max-md:textsm mt-1">{food.rating}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 max-md:text-lg">Ingredients</h3>
                    <ul className="grid grid-cols-2 gap-x-5 gap-y-2 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:text-sm">
                    {Array.isArray(food.ingredients) &&
                        food.ingredients.slice(0, 10).map((item, index) => (
                        <li className="text-slate-600 list-disc list-inside" key={index}>
                            {item}
                        </li>
                    ))}
                    </ul>

                </div>
                </div>
                
            </div>
        </div>

    </>
  )
}

export default RecipesPageDetails