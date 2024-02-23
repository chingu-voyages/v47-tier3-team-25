import React from 'react';
import OverviewImg from '../public/images/Overview-Img.svg';
import Image from 'next/image';
const Overview = () => {
  return (
    <section className=" relative my-10">
      <Image
        src={OverviewImg}
        width={1000}
        height={724}
        alt="OverviewImg"
        className="lg:w-[60%] h-[724px] object-cover"
      />{' '}
      <div className="absolute bottom-[18rem] md:bottom-20  left-10 md:left-[40%] z-10 text-white sm:text-black">
        <h3 className="text-[30px] sm:text-[60px] font-semibold">Overview</h3>
        <p className="text-lg md:text-2xl pr-10 lg:pr-12 ">
          CareEase is your friendly online destination for buying cars with
          ease. We provide a straightforward and secure platform where you can
          effortlessly explore a variety of vehicles, customize your
          preferences, and complete your purchase hassle-free. Our goal is to
          make your car-buying experience simple, enjoyable, and tailored to
          your needs.{' '}
        </p>
      </div>
    </section>
  );
};

export default Overview;
