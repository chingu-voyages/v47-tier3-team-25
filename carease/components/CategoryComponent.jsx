import React from 'react';
import Card from './Card';
import Image from 'next/image';

const CategoryComponent = ({ title, desc, tag }) => {
  return (
    <div className="mt-20 md:px-10">
      <div className="mx-2 sm:mx-10">
        <div className="flex items-center justify-between font-normal ">
          <h4 className="text-3xl md:text-[60px] ">{title} </h4>
          <p>View All</p>
        </div>
        <p className=" mt-6 md:max-w-120">{desc}</p>
      </div>
      <div className="flex justify-around gap-20 flex-wrap">
        <Card tag={tag} />
        <Card tag={tag} />
        <Card tag={tag} />
      </div>
    </div>
  );
};

export default CategoryComponent;
