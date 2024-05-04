'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';

import axios from 'axios';
import { IoMdClose } from 'react-icons/io';
import CarSpecification from '@/components/CarSpecification';

const page = ({ params }) => {
  const [compareCarData, setCompareCarData] = useState({
    carA: {},
    carB: {},
  });

  const carId_A = params.carId_A;
  const carId_B = params.carId_B;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/api/compareCars/compare/${carId_A}/${carId_B}`
      );

      const [carA, carB] = await response.data;

      setCompareCarData({
        carA: {
          category: carA.category,
          model: carA.model,
          imageUrl: carA.imageUrl,
          mpg: carA.specifications.mpg,
          engine: carA.specifications.engine,
          fuelType: carA.specifications.fuel_type,
          driveTrain: carA.specifications.drivetrain,
          exterior: carA.specifications.exterior,
          exteriorColor: carA.specifications.exterior_color,
          interiorColor: carA.specifications.interior_color,
          transmission: carA.specifications.transmission,
          convenience: carA.specifications.convenience,
        },
        carB: {
          category: carB.category,
          model: carB.model,
          imageUrl: carB.imageUrl,
          mpg: carB.specifications.mpg,
          engine: carB.specifications.engine,
          fuelType: carB.specifications.fuel_type,
          driveTrain: carB.specifications.drivetrain,
          exterior: carB.specifications.exterior,
          exteriorColor: carB.specifications.exterior_color,
          interiorColor: carB.specifications.interior_color,
          transmission: carB.specifications.transmission,
          convenience: carB.specifications.convenience,
        },
      });
    };

    fetchData();
  }, []);

  const specifications = [
    'Model',
    'MPG',
    'Engine',
    'Fuel-Type',
    'Drive Train',
    'Transmission',
    'Exterior',
    'Convenience',
  ];

  return (
    <section className="mt-40 ">
      <div className="lg:pl-14">
        <h3 className="text-2xl font-semibold ml-2 ">Car comparison</h3>
        <div className="flex flex-wrap gap-4 w-[100%] lg:w-[90%] my-10 items-center mx-2">
          <SearchBar styleType="w-[90%] sm:w-[50%] text-[10px] md:text-2xl" />
          <Button
            name="Compare car"
            styleType="bg-gray-300 text-primary h-10 md:ml-16 text-[10px] h-6 lg:text-[1rem]"
          />
          <Button
            name="Remove All"
            styleType="bg-gray-300 text-[10px] h-6 lg:text-[1rem]"
          />
          <Button
            name="Save Comparison"
            styleType="bg-gray-300 text-[10px] h-6 lg:text-[1rem]"
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-10 md:gap-40 px-2 lg:pr-12">
        <div className="flex items-end h-[130px] sm:h-[200px] md:h-[280px] lg:h-[500px] relative mt-10">
          <button
            type="button"
            className="absolute top-8 right-0 md:right-0 md:top-[6rem] lg:top-[12rem] text:lg sm:text-2xl"
          >
            <IoMdClose />
          </button>
          <Image
            src={compareCarData?.carA.imageUrl}
            width={200}
            height={200}
            alt={compareCarData?.carB.model}
            className=" w-[100%] h-[60%]"
          />
        </div>
        <div className="flex  items-end h-[130px] sm:h-[200px] md:h-[280px] lg:h-[500px] relative mt-10">
          <button
            type="button"
            className="absolute  top-8 right-0 md:right-0 md:top-[6rem] lg:top-[12rem] text:lg sm:text-2xl"
          >
            <IoMdClose />
          </button>
          <Image
            src={compareCarData?.carB.imageUrl}
            width={200}
            height={200}
            alt={compareCarData?.carB.model}
            className=" w-[100%] h-[60%]"
          />
        </div>
      </div>
      <div className="flex px-1 py-2 md:px-10 md:py-6 text-[10px] sm:text-[1rem] bg-gray-200  ">
        <div
          className="flex flex-end
         md:gap-8  w-full py-4 "
        >
          <ul className="flex gap-8 flex-col  px-2 capitalize font-semibold">
            {specifications.map((item, index) => {
              return (
                <li className="h-10" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
          <div
            className="flex sm:justify-around
         md:gap-8  w-full  "
          >
            <ul className="flex gap-8 flex-col px-2">
              <CarSpecification
                model={compareCarData?.carA.model}
                mpg={compareCarData?.carA.mpg}
                engine={compareCarData?.carA.engine}
                fuelType={compareCarData?.carA.fuelType}
                driveTrain={compareCarData?.carA.driveTrain}
                transmission={compareCarData?.carA.transmission}
                exterior={compareCarData?.carA.exterior}
                convenience={compareCarData?.carA.convenience}
              />
            </ul>
            {compareCarData.carB && (
              <ul className="flex items-start gap-8 flex-col  px-2">
                <CarSpecification
                  model={compareCarData?.carB.model}
                  mpg={compareCarData?.carB.mpg}
                  engine={compareCarData?.carB.engine}
                  fuelType={compareCarData?.carB.fuelType}
                  driveTrain={compareCarData?.carB.driveTrain}
                  transmission={compareCarData?.carB.transmission}
                  exterior={compareCarData?.carB.exterior}
                  convenience={compareCarData?.carB.convenience}
                />
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
