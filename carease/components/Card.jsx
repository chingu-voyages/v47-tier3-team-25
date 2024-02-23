'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './Button';'
import Link from 'next/link'

import CompareCarModel from './CompareCarModel';
const Card = ({ tag, imageUrl, model, carId }) => {
  const [show, setShow] = useState(false);
  const handleModel = () => {
    setShow(!show);
  };

  return (
    <div className="relative  md:w-[400px] flex flex-col text-center  flex-wrap my-6">
      <div className="mt-6  h-[400px] bg-[#D9D9D9] rounded-2xl relative">
        <div className="bg-[url('/images/ellipse.svg')] bg-no-repeat absolute top-[-50px] w-[150px] h-[80px] mx-[31%]">
          <p className="uppercase text-center mt-12 ">{tag}</p>
        </div>

        <div className=" mt-[40%]">
          <Image
            src={imageUrl}
            width={450}
            height={400}
            alt={model}
          />
        </div>
      </div>
      <p className="text-4xl my-4">{model}</p>
      <div className="flex justify-around lg:justify-between ">
        
        <Link href={`/car/${carId}`}>
        <Button
          styleType={'bg-[#F14021] text-white border-none'}
          name="View Model"
        />
         </Link>
        <Button
          handleModel={handleModel}
          styleType={'border-2 border-[#D9D9D9]'}
          name="Compare"
        />
      </div>

      {show && <CompareCarModel handleModel={handleModel} />}
    </div>
  );
};

export default Card;
