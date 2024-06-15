import React from 'react';
import mclarenLogo from '../public/images/mclaren-logo.png';
import bmwLogo from '../public/images/bmw-logo.png';
import maseratiLogo from '../public/images/maserati-logo.png';
import ToyotaLogo from '../public/images/Toyota.png';
import MarutiLogo from '../public/images/marutilogo.png';
import TataLogo from '../public/images/Tatalogo.png';
import LamborghiniLogo from '../public/images/Lamborghini-Logo.png';
import Image from 'next/image';
const PopularBrands = () => {
  return (
    // <section className="md:px-28 h-[1700px] sm:h-[1000px] lg:h-[800px] md:text-left py-14 bg-gradient-to-b to-white from-[#908C8D] mb-20">
      
    //   <h4 className="md:mx-2 text-[30px] text-center sm:text-start font-bigHeadings tracking-tighter sm:text-[40px] md:text-[50px] font-normal">

      <section className="brands-xsm h-[1000px] md:h-[890px] lg:h-[700px] xl:h-[700px] mx-10 py-2 md:py-20 px-2 md:px-20 items-center">
       <div className="gap-10">
          <h4 className="text-[30px] text-center sm:text-start font-headings tracking-tighter sm:text-[40px] md:text-[50px] font-normal">
            Popular Brands
          </h4>
     
          <div className="flex flex-wrap gap-4 md:gap-20 lg:gap-16 mt-10 justify-center md:justify-around items-center h-[250px]">
            {[
              bmwLogo,
              LamborghiniLogo,
              maseratiLogo,
              ToyotaLogo,
              TataLogo,
              MarutiLogo,
              mclarenLogo,
            ].map((logo) => (
            <div
              className="border-2 border-[#9e9c9c] h-[120px] w-[170px] xl:h-[150px] xl:w-[220px] flex items-center gap-20"
              key={logo}
            >
              <Image
                src={logo}
                width={200}
                height={250}
                alt="mc"
                className="bg-white w-[40%] h-[50%] mx-auto py-auto bg-cover bg-center"
              />
            </div>
            ))}
          </div>
        </div>
      </section>     
    );
};

export default PopularBrands;
