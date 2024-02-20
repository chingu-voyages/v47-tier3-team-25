'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from './Button';

const HeroCarousels = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPreView={3}
        scrollbar={{ draggable: true }}
        className=""
      >
        <SwiperSlide>
          <div className="text-center ">
            <Image
              src="/images/red-lamborghini.svg"
              width={700}
              height={400}
              className="mx-auto"
            />
            <h5 className="text-2xl mb-2 font-bold">AVENTADOR SV J</h5>
            <div className="inline-flex gap-8 mb-10 ">
              <Button
                styleType={'bg-[#F14021] text-white border-none'}
                name="Discover"
              />
              <Button
                styleType={'border-2 border-[#D9D9D9]'}
                name="View Model"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center ">
            <Image
              src="/images/red-lamborghini.svg"
              width={700}
              height={400}
              className="mx-auto"
            />
            <h5 className="text-2xl mb-2 font-bold">AVENTADOR SV J</h5>
            <div className="inline-flex gap-8">
              <Button
                styleType={'bg-[#F14021] text-white border-none'}
                name="Discover"
              />
              <Button
                styleType={'border-2 border-[#D9D9D9]'}
                name="View Model"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center ">
            <Image
              src="/images/red-lamborghini.svg"
              width={700}
              height={400}
              className="mx-auto"
            />
            <h5 className="text-2xl mb-2 font-bold">AVENTADOR SV J</h5>
            <div className="inline-flex gap-8">
              <Button
                styleType={'bg-[#F14021] text-white border-none'}
                name="Discover"
              />
              <Button
                styleType={'border-2 border-[#D9D9D9]'}
                name="View Model"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousels;
