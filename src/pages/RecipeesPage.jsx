import React, { useState } from 'react';
import Foods from '../components/Foods';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const RecipeesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Chicken', 'Pork', 'Beef', 'Seafood', 'Others'];
  const { cookKeyWord } = useParams();

  const buttonVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100 pb-40 rounded-lg shadow-md max-md:px-0 max-xl:px-10">
        <div className="flex items-center flex-col w-full">
          <motion.div
            className="text-center py-20 space-y-5 bg-white shadow-md max-xl:w-full max-md:m-auto max-md:px-5 max-xl:px-40"
            variants={contentVariant}
            initial="hidden"
            animate="visible"
          >
            <h4 className="font-medium text-sm">RECIPES FOR EVERY TASTE</h4>
            <h3 className="font-medium text-4xl text-black">Recipes</h3>
            <p className="w-[1000px] text-slate-600 max-xl:w-full">
              Browse a wide variety of recipes designed for every taste and skill level. From comforting classics to
              creative <br /> culinary delights, find the perfect dish to inspire your next meal!
            </p>
          </motion.div>

          <motion.div
            className="space-x-2 py-10 xl:space-x-4 max-md:grid max-md:grid-cols-3 max-md:m-auto max-md:gap-6 max-md:px-2"
            variants={contentVariant}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-lg font-bold border-2 cursor-pointer 
                  max-md:text-sm max-md:px-2 max-md:py-2 ease-in duration-150 transition-all 
                  ${
                    selectedCategory === category
                      ? 'bg-primary-color text-white border-2'
                      : 'border-gray-300 text-black hover:bg-primary-color hover:text-white'
                  }`}
                variants={buttonVariant} 
                initial="hidden"
                animate="visible"
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="w-full flex py-10 flex-col items-center max-md:m-auto max-xl:m-auto"
          variants={contentVariant}
          initial="hidden"
          animate="visible"
        >
          <Foods category={selectedCategory} searchKeyword={cookKeyWord} />
        </motion.div>
      </div>
    </>
  );
};

export default RecipeesPage;
