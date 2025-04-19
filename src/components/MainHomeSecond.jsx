import React, { useEffect, useState } from 'react';
import rateicon from '/rate-icon.png';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const MainHomeSecond = () => {
  const [foods, setFoods] = useState([]);
  const categories = ['Latest Recipes', 'Most Popular Recipes', "Editor's Choice"];
  const [category, setSelectedCategory] = useState('Latest Recipes');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodsDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch('/Foods.json');
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error('Error Fetching food details', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoodsDetails();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const filterCategories = foods.filter((food) =>
    category === 'Latest Recipes'
      ? food.date > 2020
      : category === 'Most Popular Recipes'
      ? food.popular === true
      : category === "Editor's Choice"
      ? food.fav === true
      : false
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFoods = filterCategories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filterCategories.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleCheckRecipe = (id) => {
    navigate(`/Recipes/${id}`);
  };

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="text-center my-10 space-x-5 max-md:space-y-5">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-5 py-3 rounded-lg font-bold border-2 cursor-pointer
              max-md:text-sm max-md:px-2 max-md:py-2 ease-in duration-150 transition-all 
              ${
                category === cat
                  ? 'bg-primary-color text-white border-2'
                  : 'border-gray-300 text-black hover:bg-primary-color hover:text-white'
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-xl:grid-cols-2">
        {currentFoods.map((foodDetails) => (
          <div
            key={foodDetails.id}
            className="card bg-base-100 w-95 shadow-md max-md:w-80 max-xl:w-85"
          >
            <figure>
              <img src={foodDetails.image} alt={foodDetails.name} className="w-full h-70" />
            </figure>
            <div className="card-body">
              <h4 className="text-primary-color font-medium">{foodDetails.subname}</h4>
              <h2 className="card-title ">{foodDetails.name}</h2>
              <div className="flex items-center space-x-1">
                <img src={rateicon} alt="rating" className="w-5" />
                <h4 className="text-slate-500 my-auto text-md mt-1">{foodDetails.rating}</h4>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCheckRecipe(foodDetails.id)}
                  className="border-2 border-gray-300 px-4 cursor-pointer font-bold ease-in duration-150 transition-all py-3 rounded-lg hover:bg-primary-color hover:text-white"
                >
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
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="join-item btn"
            >
              «
            </button>
            <button className="join-item btn">Page {currentPage}</button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="join-item btn"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHomeSecond;