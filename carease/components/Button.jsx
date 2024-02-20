import React from 'react';

const Button = ({ name, styleType }) => {
  return (
    <button
      className={`${styleType} rounded-[15.961px] py-2 px-6 font-semibold`}
    >
      {name}{' '}
    </button>
  );
};

export default Button;
