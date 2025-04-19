import React from 'react';
import MainHome from '../components/MainHome';
import SecondHome from '../components/SecondHome';
import MainHomeSecond from '../components/MainHomeSecond';


const HomePage = () => {
  return (
    <>
    <div className="xl:pb-20">
      <MainHome />
      <MainHomeSecond />
      <SecondHome />
    </div>
    </>
  );
};

export default HomePage;
