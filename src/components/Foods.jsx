import React from 'react'
import { useState, useEffect } from 'react'

const Foods = () => {
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

if(loading)(
    <div className="flex min-h-screen justify-center items-center">Loading ...</div>
)

  return (
    <>
        {foods.map((food) => (
             <div key={food.id} className="card bg-base-100 w-95 shadow-sm">
            
             <figure>
             <img
                 src={food.image}
                 alt="Shoes" 
                 className='w-full h-70'
                 />
             </figure>
             <div className="card-body">
                <h4 className=''>{food.subname}</h4>
                <h2 className="card-title">{food.name}</h2>
                <div className="">
                    <img src="" alt="" />
                    <h4>{food.rating}</h4>
                </div>
             <div className="card-actions justify-end">
                 <button className="btn btn-primary">Check Recipe</button>
             </div>
             </div>
         </div>
        ))
        }
  </>
  )
}

export default Foods