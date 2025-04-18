import React from 'react';

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex items-center gap-6">
          <div className="skeleton h-20 w-20 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-5 w-32"></div>
            <div className="skeleton h-5 w-40"></div>
          </div>
        </div>
        <div className="skeleton h-40 w-[500px] rounded-lg"></div>
        <div className="skeleton h-20 w-[500px] rounded-lg"></div>
        <div className="skeleton h-10 w-[200px] rounded-lg"></div>
      </div>
    </div>
  );
};

export default Spinner;
