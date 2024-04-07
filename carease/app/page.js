import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VideoCarousels from '@/components/VideoCarousels';
import Overview from '@/components/Overview';
import mclarenLogo from '../public/images/mclaren-logo.png';
import bmwLogo from '../public/images/bmw-logo.png';
import maseratiLogo from '../public/images/maserati-logo.png';
import LamborghiniLogo from '../public/images/Lamborghini-Logo.png';
import HeroImage from '../public/images/Lambo-by-Abdulwahab-Alawadhi.svg';
import HeroImage2 from '../public/images/Hero-2.svg';
import Image from 'next/image';
import OurBusiness from '@/components/OurBusiness';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import FeaturedComparison from '@/components/FeaturedComparison';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        title="AVENTADOR SVJ"
        desc="The Revuelto is the beginning of a new era for Lamborghini, who has
          harnessed the power of hybridization technology to create the first
          HPEV (High Performance Electrified Vehicle)."
        btnName="Explore More"
        bgImage={HeroImage}
        link="carlist"
      />
      <About />
      <Overview />
      <div className="md:px-20">
        <h4 className="text-center text-[30px] md:text-[60px] font-semibold capitalize">
          Available Cars
        </h4>
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
      <div className="">
        <Hero
          title="MCLAREN 720S"
          desc="A super-fast and stylish car that gives you an incredible driving experience"
          btnName="Discover"
          bgImage={HeroImage2}
          link="carlist"
        />
      </div>
      <OurBusiness />

      <FeaturedComparison />
      <div className="h-[300px] sm:h-[500px] lg:h-full ">
        <VideoCarousels />
      </div>
      <Footer />
    </main>
  );
}
