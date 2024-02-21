import React from 'react';
import HeroImage from '../public/images/Lambo-by-Abdulwahab-Alawadhi.svg';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative">
      <div className="h-[724px]">
        <Image
          src={HeroImage}
          width={1440}
          height={724}
          alt="Hero"
          className="w-full h-[724px] object-cover"
        />
      </div>
      <div className="absolute top-[60%] left-10 md:max-w-[50rem] text-white">
        <h2 className="font-bold text-[30px] md:text-[50px]">AVENTADOR SVJ</h2>
        <p className="mt-6 text-sm md:text-xl">
          The Revuelto is the beginning of a new era for Lamborghini, who has
          harnessed the power of hybridization technology to create the first
          HPEV (High Performance Electrified Vehicle).
        </p>
        <Button
          styleType={'mt-6 border-2 border-[#D9D9D9]'}
          name="Explore More"
        />
      </div>
    </section>
  );
};

export default Hero;
