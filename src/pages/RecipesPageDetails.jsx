import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import rateicon from '/rate-icon.png';


const RecipesPageDetails = () => {
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
        <div className="min-h-screen flex justify-center max-md:flex-col items-center bg-slate-100 px-4 py-12">
            <div className="grid grid-cols-2 gap-10 bg-white p-20 max-md:p-10 rounded-xl shadow-lg max-md:grid-cols-1">
                <div className="w-[400px] h-[400px] max-md:w-full">
                <figure className="overflow-hidden rounded-xl w-full h-full">
                    <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
                </figure>
                </div>

                <div className="flex flex-col justify-between">
                <div className='space-y-2'>
                    <h4 className="text-primary-color font-medium">{food.subname}</h4>
                    <h2 className="font-medium text-4xl mb-4">{food.name}</h2>
                    <div className="flex items-center space-x-2 mb-6">
                    <img src={rateicon} alt="rating" className="w-4 h-4" />
                    <span className="text-gray-500">{food.rating}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
                    {Array.isArray(food.ingredients) && food.ingredients.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1 mt-5">
                            {food.ingredients.map((item, index) => (
                            <li className='text-slate-500' key={index}>{item}</li>
                            ))}
                        </ul>
                        ) : (
                        <p>No ingredients listed.</p>
                        )}
                </div>
                </div>
                
            </div>
        </div>

    </>
  )
}

export default RecipesPageDetails