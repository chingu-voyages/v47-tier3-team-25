import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = ({ styleType }) => {
  return (
    <div className={`relative ${styleType}  `}>
      <input
        type="text"
        className="bg-gray-300 h-10 lg:h-14 rounded-full w-[100%] pl-10  text-black outline-none"
        placeholder="cars"
      />
      <button
        type="button"
        className="text-black absolute z-20  text-xl lg:text-2xl right-5 top-3 lg:top-4"
      >
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchBar;
