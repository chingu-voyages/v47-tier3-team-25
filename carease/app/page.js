import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VideoCarousels from '@/components/VideoCarousels';
import Overview from '@/components/Overview';
import mclarenLogo from '../public/images/mclaren-logo.png';
import bmwLogo from '../public/images/bmw-logo.png';
import maseratiLogo from '../public/images/maserati-logo.png';
import LamborghiniLogo from '../public/images/Lamborghini-Logo.png';
import Image from 'next/image';
import OurBusiness from '@/components/OurBusiness';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import FeaturedComparison from '@/components/FeaturedComparison';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <OurBusiness />
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
      <FeaturedComparison />
      <div className="h-[300px] sm:h-[500px] lg:h-full ">
        <VideoCarousels />
      </div>
      <Footer />
    </main>
  );
}
