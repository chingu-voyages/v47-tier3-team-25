'use client';

import { useState } from 'react';
import Categories from '@/components/Categories';
import Image from 'next/image';
import SingleCar from '@/public/images/single.png';
import VerticalMenu from '@/components/VerticalMenu';
import Link from 'next/link';
import CompareButton from '@/components/CompareButton';
import CompareCarModel from '@/components/CarSelectModal';

const Comparison = () => {
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setShow(!show);
  };

  return (
    <>
      {/* Section to display comparison */}
      <section className=" w-[100%] h-[100%] sm:px-4 lg:px-16 py-20 sm:py-32 px-1 bg-single-car-sm lg:bg-single-car-bg bg-cover bg-center">
        <div
          className="relative flex flex-col justify-center md:justify-end items-end gap-3"
          onMouseLeave={() => setShow(false)}
        >
          <div className="bg-gradient-to-t to-[#343131]/80 from-black/60 text-xs md:text-sm font-light transition-all duration-300 py-2 w-[98%] sm:w-[450px]  lg:w-[500px] flex justify-center gap-1 sm:gap-4 px-4  rounded-md ">
            {['Engine', 'Drive', 'Transmission', 'Exterior', 'MPG'].map(
              (item, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className="text-white px-2 md:px-4 py-2 rounded-md hover:bg-[#fff] 
                     transition-all duration-300 hover:text-[#3f3f3f]"
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </div>
          <div className="h-14">
            <CompareButton handleclick={handleclick} />
          </div>
          {show && <CompareCarModel modelStyle="py-1" />}
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between">
          <VerticalMenu />

          <Image
            src={SingleCar}
            width="450"
            height="300"
            className="w-[350px] md:w-[545px] lg:w-[450px] xl:w-[500px] mx-auto  mt-28 sm:mt-36 md:mt-4 lg:mr-28"
          />
        </div>
      </section>

      <section className="py-[50px]">
        <Categories />
      </section>
    </>
  );
};

export default Comparison;
