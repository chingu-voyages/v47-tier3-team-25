'use client';
import React, { useState, useEffect } from 'react';
import CategoryComponent from '@/components/CategoryComponent';
import FilterSidebar from '@/components/FilterSidebar';
import HeroCarousels from '@/components/HeroCarousels';
import axios from 'axios';

const page = () => {
  const [popularCars, setPopularCars] = useState([]);
  const [superCars, setSuperCars] = useState([]);
  const [upcomingCars, setUpcomingCars] = useState([]);
  const [otherCars, setOtherCars] = useState([]);

  useEffect(() => {
    const getCarList = async () => {
      const response = await axios.get(
        `/api/getTopThree/getTopThree/popular/supercars/upcoming/other`
      );
      const data = await response.data;

      const {
        popularCarsData,
        superCarsData,
        upcomingCarsData,
        otherCarsData,
      } = data;

      setPopularCars(popularCarsData);
      setSuperCars(superCarsData);
      setUpcomingCars(upcomingCarsData);
      setOtherCars(otherCarsData);
    };
    getCarList();
  }, []);

  return (
    <section>
      <div className="relative bg-carlist-hero w-full h-[648px] bg-cover">
        <h2 className="absolute top-[30%] h-full text-6xl  sm:text-7xl mx-auto ml-2 lg:ml-20 text-white lg:max-w-[500px]">
          EXPLORE THE CAREASE MODELS
        </h2>
      </div>
      <div className=" w-full h-auto  relative">
        <span className="z-20 absolute hexa w-full top-[-98.791px] sm:top-[-100px] rounded-tl-lg"></span>
        <div className="lg:mx-12">
          <HeroCarousels />
        </div>
      </div>
      <div className="flex relative">
        <div className="w-[20%] h-full top-20 sticky mt-40 md:block hidden">
          <FilterSidebar />
        </div>
        <div className="">
          <section id="superCars">
            <CategoryComponent
              carData={superCars}
              desc="Unleash the thrill of the road and track. Cutting-edge performance and
          unrivalled engagement in every drive"
            />
          </section>

          <section id="popularCars">
            <CategoryComponent
              carData={popularCars}
              desc="Discover our top cars, blending style with outstanding performance for an incredible driving experience that sets new standards in automotive excellence."
            />
          </section>

          <section id="upcomingCars">
            <CategoryComponent
              carData={upcomingCars}
              desc="Unveiling the Future of Driving Excellence. Your Next Dream Car Awaits!"
            />
          </section>

          <section id="otherCars">
            <CategoryComponent
              carData={otherCars}
              desc="Explore our cars, seamlessly merging exquisite style with unparalleled performance, delivering an extraordinary driving experience that redefines the benchmarks in automotive excellence."
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
