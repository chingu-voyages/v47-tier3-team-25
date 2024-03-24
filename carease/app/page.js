import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HeroCarousels from '@/components/HeroCarousels';
import Overview from '@/components/Overview';
import mclarenLogo from '../public/images/mclaren-logo.png';
import bmwLogo from '../public/images/bmw-logo.png';
import maseratiLogo from '../public/images/maserati-logo.png';
import LamborghiniLogo from '../public/images/Lamborghini-Logo.png';
import Image from 'next/image';
import OurBusiness from '@/components/OurBusiness';

import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Overview />
      <div className="md:px-20">
        <h4 className="text-center text-[30px] md:text-[60px] font-semibold capitalize">
          Available Cars
        </h4>
        <HeroCarousels />
      </div>
      <div className="my-10 md:px-20 h-[1000px] sm:h-[600px] text-center mt-10">
        <h4 className="text-[30px] md:text-[60px] font-semibold ">
          Popular Brands
        </h4>
        <div className="flex flex-wrap gap-4 mt-10 justify-around items-center h-[250px] ">
          {[mclarenLogo, maseratiLogo, bmwLogo, LamborghiniLogo].map((logo) => (
            <div className=" border-2 p-4 border-[#D9D9D9]" key={logo}>
              <Image
                src={logo}
                width={200}
                height={250}
                alt="mc"
                className="bg-white"
              />
            </div>
          ))}
        </div>
      </div>
      <OurBusiness />
      <Footer />
    </main>
  );
}
