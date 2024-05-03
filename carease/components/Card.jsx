'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './Button';
import Link from 'next/link';

import CompareCarModel from './CompareCarModel';
const Card = ({ tag, imageUrl, model, carId }) => {
  const [show, setShow] = useState(false);
  const handleModel = () => {
    setShow(!show);
  };

  return (
    <div className="relative  md:w-[400px] flex flex-col text-center  flex-wrap my-6 mx-4 md:mx-0">
      <div className="mt-6 flex items-center  h-[400px] bg-[#D9D9D9] rounded-2xl relative px-4">
        <p className="uppercase text-center  bg-primary rounded-t-full w-[200px] mx-auto absolute bottom-0 pt-2 text-white left-[25%]">
          {tag}
        </p>

        <Image
          src={imageUrl}
          width={450}
          height={400}
          alt={model}
          priority={false}
        />
      </div>
      <p className=" text-2xl md:text-3xl my-4">{model}</p>
      <div className="flex justify-between px-2 ">
        <Link href={`/car/${carId}`}>
          <Button
            styleType={'border-2 border-primary  text-primary '}
            name="View Model"
          />
        </Link>
        <Button
          handleModel={handleModel}
          styleType={' bg-primary text-white'}
          name="Compare"
        />
      </div>

      {show && <CompareCarModel handleModel={handleModel} />}
    </div>
  );
};

export default Card;
