import React from 'react';
import Button from './Button';

const CompareButton = ({ handleclick }) => {
  return (
    <>
      {' '}
      <button
        className=" bg-[#E11D48] text-sm lg:text-md text-white px-4 rounded-full py-[.8px] sm:py-1 "
        onClick={handleclick}
      >
        Compare
      </button>
    </>
  );
};

export default CompareButton;
