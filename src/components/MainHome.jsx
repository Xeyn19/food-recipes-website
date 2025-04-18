import React, { useState } from 'react';
import porkandspoon from '/porkandspoon.png';
import search from '/search.png';
import { useNavigate } from 'react-router-dom';

const MainHome = () => {
  const navigate = useNavigate();
  const [searchCook, setSearchCook] = useState('');

  function handleSearchCook(e) {
    setSearchCook(e.target.value);
  }

  function handleClickSearchCook() {
    if (searchCook.trim()) {
      navigate(`/Recipes/search/${searchCook.toLowerCase()}`);
    }
  }

  return (
    <div className="px-5 max-xl:px-0">
      <div
        className="w-full h-[600px] bg-cover bg-center rounded-xl flex flex-col justify-center px-40 max-xl:flex
         max-xl:text-center max-md:justify-start max-xl:px-10 max-xl:rounded-none shadow-md"
        style={{
          backgroundImage: 'url(/homebg.jpg)',
        }}
      >
        <div className="w-[750px] space-y-5 text-black -mt-18 max-md:w-full max-md:flex max-md:flex-col max-md:mt-15 max-xl:flex max-xl:flex-col">
          <h1 className="font-bold text-5xl leading-15 -ml-1.5 max-md:text-xl max-md:leading-6">
            You don't know how to make the dish you have in mind?
          </h1>
          <span className="font-medium text-black">
            Feed your imagination and spark your creativity. From cravings to creations, let your <br />
            ideas flourish and uncover the perfect recipe waiting to be discovered.
          </span>
          <div
            className="mt-5 flex bg-white w-[670px] h-[70px] px-3  py-5 rounded-lg items-center max-md:w-full
              max-md:h-[50px] max-xl:w-full max-xl:self-center"
          >
            <img src={porkandspoon} alt="" className="w-7 max-md:w-5" />
            <input
              type="text"
              placeholder="Find what do you want to cook today"
              value={searchCook}
              onChange={handleSearchCook}
              className="flex-1 border-none outline-none text-slate-500 px-5 max-md:px-1 max-md:text-[11px]"
            />
            <button onClick={handleClickSearchCook} className="cursor-pointer">
              <img src={search} alt="" className="w-10 h-10 max-md:w-7 max-md:h-7" />
            </button>
          </div>
          <span className="text-slate-600 text-sm max-md:text-[10px] max-md:-mt-2">
            Type a keyword and discover recipes that turn your cravings into delicious reality!
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
