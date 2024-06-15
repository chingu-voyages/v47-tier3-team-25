import React from 'react';
import HeroImage from '../public/images/Hero-carscompare.svg';
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <section className="h-[450px] md:h-[800px]">
      <div className="text-center mt-28 lg:w-[60%] mx-auto">
        <h1 className=" text-4xl lg:text-5xl mb-10">
          <span className="text-[#E11D48] font-headings"> Search and compare</span> cars
        </h1>
        <div className="relative w-[60%] mx-auto">
          <input
            type="text"
            className="bg-gray-300 h-12 lg:h-16 rounded-full w-[100%] pl-10 text-2xl text-black outline-none"
            placeholder="cars"
          />
          <button
            type="button"
            className="text-black absolute z-20  text-2xl lg:text-4xl right-5 top-3"
          >
            <IoSearchOutline />
          </button>
        </div>
      </div>
      <div className=" mt-24  ">
        <Image
          src={HeroImage}
          width={0}
          height={824}
          alt="Hero"
          className="w-full h-[160px] md:h-[424px] object-cover overflow-hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
