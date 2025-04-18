import React, { useState, useEffect } from 'react';
import rateicon from '/rate-icon.png';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Foods = ({ category, searchKeyword = '' }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const response = await fetch('/Foods.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchKeyword]);

  const filteredFoods =
    category === 'All'
      ? foods
      : category === 'Others'
      ? foods.filter((food) => !['Chicken', 'Pork', 'Seafood','Beef'].includes(food.subname))
      : foods.filter((food) => food.subname === category);

  const searchedFoods = searchKeyword
    ? filteredFoods.filter((food) =>
        food.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        food.subname.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : filteredFoods;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFoods = searchedFoods.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(searchedFoods.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  function handleCheckRecipe(id){
    navigate(`/Recipes/${id}`)
  } 

  if (loading) {
    return <Spinner />
  }

  if(searchedFoods.length === 0)  return  <div className="">No recipes matched your search. Try a different Name!</div> 

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-3 gap-20 max-md:grid-cols-1 max-xl:grid-cols-2">
        {currentFoods.map((food) => (
          <div key={food.id} className="card bg-base-100 w-95 shadow-md max-md:w-80 max-xl:w-85">
            <figure>
              <img src={food.image} alt={food.name} className="w-full h-70" />
            </figure>
            <div className="card-body">
              <h4 className="text-primary-color font-medium">{food.subname}</h4>
              <h2 className="card-title">{food.name}</h2>
              <div className="flex items-center space-x-1">
                <img src={rateicon} alt="" className="w-5" />
                <h4 className="text-slate-500 my-auto text-md mt-1">{food.rating}</h4>
              </div>
              <div className="card-actions justify-end">
                <button onClick={() => handleCheckRecipe(food.id)}
                className="border-2 border-gray-300 px-4 cursor-pointer font-bold ease-in duration-150 transition-all py-3 rounded-lg hover:bg-primary-color hover:text-white">
                  Check Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="w-full flex justify-center mt-20">
          <div className="join">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="join-item btn">
              «
            </button>
            <button className="join-item btn">Page {currentPage}</button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="join-item btn">
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Foods;
