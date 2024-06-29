'use client';

import { useEffect, useState } from 'react';
import Categories from '@/components/Categories';
import Image from 'next/image';
import SingleCar from '@/public/images/single.png';
import VerticalMenu from '@/components/VerticalMenu';
import Link from 'next/link';
import CompareButton from '@/components/CompareButton';
// import CompareCarModel from '@/components/CarSelectModal';
import CarSelectModal from '@/components/CarSelectModal';
import axios from 'axios';

const data = {
  specifications: {
    exterior_color: 'Classic Red',
    interior_color: 'Black',
    drivetrain: 'Rear-Wheel Drive',
    mpg: '16–24',
    fuel_type: 'Premium unleaded gasoline',
    transmission: '6 speed automatic',
    engine: '4.2-liter twin-turbocharged V8',
    convenience: 'Power-adjustable seats',
    entertainment: 'Infotainment system',
    exterior: 'Dihedral doors',
    safety: 'Adv driver assistance systems',
  },
  _id: '65d5fd23386cae919368558a',
  model: 'Ferrari Purosangue',
  category: 'supercars',
  imageUrl:
    'https://res.cloudinary.com/ddrpu3dfs/image/upload/v1708522786/carease/p9mj070pbwwdhpoa3qmq.png',
  cloudinary_id: 'carease/p9mj070pbwwdhpoa3qmq',
  dealer: '65cc756e9161b91c86ff0f90',
  createdAt: '2024-02-21T13:39:47.151Z',
  updatedAt: '2024-02-21T13:39:47.151Z',
  __v: 0,
};

const page = ({ params }) => {
  const specmenu = ['engine', 'drive', 'transmission', 'exterior', 'mpg'];
  const [show, setShow] = useState(false);
  const [car, setCarData] = useState([]);
  const [renderspec, setRenderSpec] = useState(null);

  const id = params.carId;

  const handleclick = () => {
    setShow(!show);
  };
  const handleSpecRender = (spec) => {
    setRenderSpec(spec);
  };
  const getSingleCar = async () => {
    try {
      const response = await axios
        .get(`/api/getCar/${id}`)
        .then((data) => data);
      if (!response.status === 'OK') {
        throw new Error('Network response was not ok');
      }
      const data = await response.data;
      setCarData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSingleCar();
  }, []);

  return (
    <>
      {/* Section to display page */}
      <section className=" w-[100%] h-[100%] sm:px-4 lg:px-16 py-20 sm:py-16 lg:py-32 px-1 bg-single-car-sm lg:bg-single-car-bg bg-cover bg-center">
        <div
          className="relative flex flex-col justify-center md:justify-end items-end gap-3"
          onMouseLeave={() => setShow(false)}
        >
          <div className="bg-gradient-to-t to-[#343131]/80 from-black/60 text-xs md:text-sm font-light transition-all duration-5000 py-2 w-[98%] sm:w-[450px]  md:w-[500px] flex justify-center gap-1 sm:gap-4 px-4  rounded-md linear">
            {specmenu.map((item) => {
              return (
                <button
                  key={item}
                  className={` px-2 md:px-4 py-2 rounded-md 
                     transition-all duration-300  capitalize ${
                       renderspec === item
                         ? 'bg-white text-[#3f3f3f]'
                         : 'bg-transparent text-white'
                     }`}
                  onClick={() => handleSpecRender(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="h-10">
            <CompareButton handleclick={handleclick} />
          </div>
          <div className="h-10">
            {show && (
              <div className=" w-[200px] text-[10px] md:text-2xl border-none bg-white/80 rounded-full  text-white outline-none ">
                <CarSelectModal model={data?.model} carId={id} />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between mb-16 md:mb-24">
          <VerticalMenu
            title={renderspec}
            imageUrl={car?.imageUrl}
            spec={car?.specifications?.[renderspec]}
          />

          <Image
            src={car?.imageUrl}
            width="450"
            alt="car"
            height="300"
            className="w-[350px] md:w-[545px] lg:w-[450px] xl:w-[500px] mx-auto   sm:mt-36 md:mt-4 lg:mr-28"
          />
        </div>
      </section>

      <section className="py-[50px]">
        <Categories />
      </section>
    </>
  );
};

export default page;
