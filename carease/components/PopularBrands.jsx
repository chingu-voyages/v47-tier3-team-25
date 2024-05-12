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
    <section className=" md:px-20 h-[1700px] sm:h-[1000px] lg:h-[800px] text-center md:text-left py-14 bg-gradient-to-b to-white from-[#908C8D] mb-20">
      <h4 className="text-[30px] md:text-[60px] font-semibold ">
        Popular Brands
      </h4>
      <div className="flex flex-wrap gap-12 mt-10 justify-around items-center h-[250px] ">
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
            className=" border-2  border-[#9e9c9c] h-[200px] w-[250px] flex items-center gap-20"
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
    </section>
  );
};

export default PopularBrands;
