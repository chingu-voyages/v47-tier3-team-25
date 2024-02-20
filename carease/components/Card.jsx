import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Card = ({ tag }) => {
  return (
    <div className="relative  md:w-[400px] flex flex-col text-center  flex-wrap my-6">
      <div className="mt-6  h-[400px] bg-[#D9D9D9] rounded-2xl relative">
        <div className="bg-[url('/images/ellipse.svg')] bg-no-repeat absolute top-[-50px] w-[150px] h-[80px] mx-[31%]">
          <p className="uppercase text-center mt-12 ">{tag}</p>
        </div>
        <div className=" mt-[40%]">
          <Image src="/images/Mclaren-720S.png" width={450} height={400} />
        </div>
      </div>
      <p className="text-4xl my-4">Mclaren-720S</p>
      <div className="flex justify-around lg:justify-between ">
        <Button
          styleType={'bg-[#F14021] text-white border-none'}
          name="Discover"
        />
        <Button styleType={'border-2 border-[#D9D9D9]'} name="View Model" />
      </div>
    </div>
  );
};

export default Card;
