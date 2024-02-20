import React from 'react';
import CategoryComponent from '@/components/CategoryComponent';
import FilterSidebar from '@/components/FilterSidebar';
import HeroCarousels from '@/components/HeroCarousels';

const page = () => {
  return (
    <section>
      <div className="relative bg-carlist-hero w-full h-[648px] bg-cover">
        <h2 className="absolute top-[30%] h-full text-6xl  sm:text-7xl mx-auto ml-2 lg:ml-20 text-white lg:max-w-[500px]">
          EXPLORE THE CAREASE MODELS
        </h2>
      </div>
      <div className=" w-full h-auto  relative">
        <span className="z-20 absolute hexa w-full top-[-98.791px] sm:top-[-100px] rounded-tl-lg"></span>
        <div className="lg:mx-12">
          <HeroCarousels />
        </div>
      </div>
      <div className="flex relative">
        <div className="w-[20%] h-full top-20 sticky mt-40 md:block hidden">
          <FilterSidebar />
        </div>
        <div className="">
          <CategoryComponent
            title="SUPER CARS"
            desc="Unleash the thrill of the road and track. Cutting-edge performance and
        unrivalled engagement in every drive"
            tag="Ultimate"
          />
          <CategoryComponent
            title="POPULAR CARS"
            desc="Discover our top cars, blending style with outstanding performance for an incredible driving experience that sets new standards in automotive excellence."
            tag="Popular"
          />
          <CategoryComponent
            title="UPCOMING CARS"
            desc="Unveiling the Future of Driving Excellence 
 Your Next Dream Car Awaits!"
            tag="Soon"
          />
          <CategoryComponent
            title="New Cars"
            desc="Take a Look at Our Newest Cars Ready to Hit the Road. Fresh Arrivals Packed with Features and Style, Promising an Upgraded Driving Adventure Just for You!"
            tag="EXCLUSIVE"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
