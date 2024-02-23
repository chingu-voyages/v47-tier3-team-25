import React, { useState, useEffect } from 'react';
import Card from './Card';
import Image from 'next/image';
import Link from 'next/link';

const CategoryComponent = ({ carData, desc }) => {

  return (
    <div className="mt-20 md:px-10">
      <div className="mx-2 sm:mx-10">
        <div className="flex items-center justify-between font-normal ">
          <h4 className="text-3xl md:text-[60px] ">{carData[0]?.category.toUpperCase()} </h4>
          <Link href={`/category/${carData[0]?.category}`}>
            <p>View All</p>
          </Link>
        </div>
        <p className=" mt-6 md:max-w-120">{desc}</p>
      </div>
      <div className="flex justify-around gap-20 flex-wrap">

        {carData.map((car) => {

          return (
            <Card   
              tag={car.category} 
              imageUrl={car.imageUrl} 
              model={car.model} 
              carId={car._id}
            />            
          )            
        })}        
        
      </div>
    </div>
  );
};

export default CategoryComponent;
