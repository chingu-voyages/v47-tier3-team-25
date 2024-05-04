'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './Button';
import Link from 'next/link';
import CompareCarModel from './CarSelectModal';

const Card = ({ tag, imageUrl, model, carId }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative  md:w-[400px] flex flex-col text-center  flex-wrap my-6 mx-4 md:mx-0"
      onMouseLeave={() => setShow(false)}
    >
      <div className="mt-6 flex items-center  h-[400px] bg-[#D9D9D9] rounded-2xl relative px-4">
        <p className="uppercase text-center  bg-primary rounded-bl-xl rounded-tr-xl   w-[200px]  absolute top-0 pt-2 pb-1 text-white right-0   text-sm mx-auto  ">
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
          handleModel={() => setShow(!show)}
          styleType={' bg-primary text-white'}
          name="Compare"
        />
      </div>

      {show && <CompareCarModel carId={carId} model={model} />}
    </div>
  );
};

export default Card;
