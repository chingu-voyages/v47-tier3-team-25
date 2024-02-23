import Link from 'next/link';
import React from 'react';

const Button = ({ name, styleType, link }) => {
  return (
    <Link href={link ? `/${link}` : '#'}>
      <button
        className={`${styleType} rounded-[15.961px] py-2 px-6 font-semibold`}
      >
        {name}{' '}
      </button>
    </Link>
  );
};

export default Button;
