'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import SUV from '../public/images/SUV.webp';
import electricVehicle from '../public/images/Electric-SUV.webp';
import commercialVehicle from '../public/images/commercial-vehicle.webp';
import luxuryVehicle from '../public/images/luxury-vehicle.webp';
const OurBusiness = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const items = [
        'Passenger vehicles',
        'Electric vehicles',
        'Commercial vehicles',
        'Luxury vehicles',
      ];
      console.log(className);
      return `<span class='lg:font-bold lg:text-xl border-b-[40px] text-white border-b-[#000] py-2 px-2 my-2 ${className} rounded-md'>${items[index]} </span>`;
    },
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      spaceBetween={50}
      // className="w-full h-[880px] lg:h-[713px] bg-yellow-200 my-10  px-6"
      className="w-full h-[880px] lg:h-[713px] bg-gradient-to-b from-white to-[#908C8D] my-10 px-6"      
    >
      <SwiperSlide>
        <div className="flex flex-col md:flex-row py-2 md:py-20 px-2 md:px-20 items-center">
          <div className="md:w-[50%] flex flex-col gap-10">
            <h4 className="text-[30px] md:text-[60px] font-semibold">
              Our Business
            </h4>
            <h5 className="text-3xl text-[#5B9CFF] font-semibold">
              New forever
            </h5>
            <p className="text-2xl max-w-[511px]">
              Cutting-edge designs, quest to excel and promise to delight
              customers keeps us ahead of the curve. Our cars and SUVs offer
              best-in-class safety and superior driving experience.
            </p>
            <p className="text-[#7670BB] text-xl font-semibold">
              Discover passenger vehicles
            </p>
          </div>
          <div className="md:w-[50%]  h-full">
            <Image
              src={SUV}
              width={400}
              height={400}
              alt="suv"
              className="w-full mt-20 md:mt-40"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col md:flex-row md:py-20 px-2 md:px-20 items-center ">
          <div className="md:w-[50%] flex flex-col gap-10">
            <h4 className="text-[30px] md:text-[60px] font-semibold">
              Our Business
            </h4>
            <h5 className="text-3xl text-[#5B9CFF] font-semibold">Go EV</h5>
            <p className="text-2xl max-w-[511px]">
              Step into the future of transportation with zero emissions, serene
              journeys, and seamlessly connectd mobility
            </p>
            <p className="text-[#7670BB] text-xl font-semibold">
              Discover electric vehicles
            </p>
          </div>
          <div className="md:w-[50%]  h-full">
            <Image
              src={electricVehicle}
              width={400}
              height={400}
              alt="suv"
              className="w-full mt-20 md:mt-40"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col md:flex-row md:py-20 px-2 md:px-20 items-center">
          <div className="md:w-[50%] flex flex-col gap-10">
            <h4 className="text-[30px] md:text-[60px] font-semibold">
              Our Business
            </h4>
            <h5 className="text-3xl text-[#5B9CFF] font-semibold">
              Going Strong
            </h5>
            <p className="text-2xl max-w-[511px]">
              Our commercial vehicles rule the roads they run on. No terrain is
              too challenging and no load too heavy
            </p>
            <p className="text-[#7670BB] text-xl font-semibold">
              Discover commercial vehicles
            </p>
          </div>
          <div className="md:w-[50%]  h-full">
            <Image
              src={commercialVehicle}
              width={400}
              height={400}
              alt="suv"
              className="w-full mt-20 md:mt-40"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col md:flex-row md:py-20 px-2 md:px-20 items-center">
          <div className="md:w-[50%] flex flex-col gap-10">
            <h4 className="text-[30px] md:text-[60px] font-semibold">
              Our Business
            </h4>
            <h5 className="text-3xl text-[#5B9CFF] font-semibold">
              A Class Apart
            </h5>
            <p className="text-2xl max-w-[511px]">
              We bring you global brands that define modern luxury and are
              steeped in a rich legacy of timeless designs.
            </p>
            <p className="text-[#7670BB] text-xl font-semibold">
              Discover luxury vehicles
            </p>
          </div>
          <div className="md:w-[50%]  h-full">
            <Image
              src={luxuryVehicle}
              width={400}
              height={400}
              alt="suv"
              className="w-full mt-20 md:mt-40"
            />
          </div>
        </div>
      </SwiperSlide>
      <div className=""></div>
    </Swiper>
  );
};

export default OurBusiness;
