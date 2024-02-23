import Link from 'next/link';
import React from 'react';

const Button = ({ name, styleType, handleModel }) => {
  return (
    <button
      onClick={handleModel}
      className={`${styleType} rounded-[15.961px] py-2 px-6 font-semibold`}
    >
      {name}{' '}
    </button>
  );
};

export default Button;
