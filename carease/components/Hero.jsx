'use client';
import React, { useEffect, useState } from 'react';
import HeroImage from '../public/images/Hero-carscompare.svg';
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import Link from 'next/link';

const Hero = () => {
  const [search, setSearch] = useState('');
  const [car, setCarData] = useState([]);

  const models = car.filter((model) => {
    if (model?.model?.toUpperCase().includes(search.toUpperCase())) {
      return model;
    }
  });
  const getSingleCar = async () => {
    try {
      const response = await axios.get(`/api/getCar`).then((data) => data);
      if (!response.status === 'OK') {
        throw new Error('Network response was not ok');
      }
      const data = await response.data;
      setCarData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSingleCar();
  }, []);

  return (
    <section className="h-[450px] md:h-[800px]">
      <div className=" text-center mt-28 lg:w-[60%] mx-auto">
        <h1 className=" text-4xl lg:text-5xl mb-10">
          <span className="text-[#E11D48] font-headings">
            {' '}
            Search and compare
          </span>{' '}
          cars
        </h1>

        <div className="relative w-[60%] mx-auto">
          <input
            type="text"
            value={search}
            className="bg-gray-300 h-12 lg:h-16 rounded-full w-[100%] pl-10 md:text-xl text-black outline-none text-sm"
            placeholder="cars"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div className="absolute flex flex-col bg-gray-200 rounded-sm w-[85%] ml-4 sm:w-[80%]  sm:ml-10 md:ml-14 text-left px-8  py-2  -bottom-30  capitalize">
              {models.map((item) => {
                return (
                  <Link
                    href={`/single-car/${item?.id}`}
                    className="text-sm md:text-lg hover:text-black/80"
                  >
                    {item?.model}{' '}
                  </Link>
                );
              })}
            </div>
          )}
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
