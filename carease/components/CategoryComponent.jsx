import React from 'react';
import Card from './Card';

import Link from 'next/link';

const CategoryComponent = ({ carData, desc }) => {
  return (
    <div className="my-20 md:px-10 mx-1">
      <div className="mx-4 sm:mx-10">
        <div className="flex items-center justify-between font-normal ">
          <h4 className="text-2xl md:text-4xl font-semibold">
            {carData[0]?.category.toUpperCase()}{' '}
          </h4>
          <Link
            href={`/category/${carData[0]?.category}`}
            className="text-gray-700 hover:underline md:text-xl"
          >
            <p>View all</p>
          </Link>
        </div>
        <p className="text-gray-500 mt-6 md:max-w-120 lg:text-lg">{desc}</p>
      </div>
      <div className="flex justify-around gap-20 flex-wrap">
        {carData.map((car) => {
          return (
            <Card
              key={car._id}
              tag={car.category}
              imageUrl={car.imageUrl}
              model={car.model}
              carId={car._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryComponent;
