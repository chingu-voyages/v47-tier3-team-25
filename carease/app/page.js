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

export default function Home() {
  return (
    <>
      <Hero
        title="AVENTADOR SVJ"
        desc="The Revuelto is the beginning of a new era for Lamborghini, who has
          harnessed the power of hybridization technology to create the first
          HPEV (High Performance Electrified Vehicle)."
        btnName="Explore More"
        bgImage={HeroImage}
      />
      <Overview />
      <div className="">
        <h4 className="text-[60px] font-semibold">AVAILABLE CARS</h4>
        <HeroCarousels />
      </div>
      <div className="my-10">
        <h4 className="text-[60px] font-semibold">POPULAR BRANDS</h4>
        <div className="flex justify-around items-center h-[250px] ">
          {[mclarenLogo, bmwLogo, maseratiLogo, LamborghiniLogo].map((logo) => (
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
      <Hero
        title="MCLAREN 720S"
        desc="A super-fast and stylish car that gives you an incredible driving experience"
        btnName="Discover"
        bgImage={HeroImage2}
      />

      <Footer />
    </>
  );
}
