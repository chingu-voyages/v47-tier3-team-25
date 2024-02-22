import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import HeroCarousels from '@/Components/HeroCarousels';
import Overview from '@/Components/Overview';
import mclarenLogo from '../public/images/mclaren-logo.png';
import bmwLogo from '../public/images/bmw-logo.png';
import maseratiLogo from '../public/images/maserati-logo.png';
import LamborghiniLogo from '../public/images/Lamborghini-Logo.png';
import HeroImage from '../public/images/Lambo-by-Abdulwahab-Alawadhi.svg';
import HeroImage2 from '../public/images/Hero-2.svg';
import Image from 'next/image';
import OurBusiness from '@/Components/OurBusiness';

export default function Home() {
  return (
    <main>
      <Hero
        title="AVENTADOR SVJ"
        desc="The Revuelto is the beginning of a new era for Lamborghini, who has
          harnessed the power of hybridization technology to create the first
          HPEV (High Performance Electrified Vehicle)."
        btnName="Explore More"
        bgImage={HeroImage}
        link="carlist"
      />
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
            <div className=" border-2 p-4 border-[#D9D9D9]">
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
      <Footer />
    </main>
  );
}
