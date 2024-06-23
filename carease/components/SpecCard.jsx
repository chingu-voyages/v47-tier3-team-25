import Image from 'next/image';
import imageUrl from '../public/images/Mclaren-720S.png';
import React from 'react';

const SpecCard = ({ spec, title }) => {
  return (
    <>
      <div className="flex flex-col h-2 w-full sm:w-[550px]">
        <>
          <div className="bg-black/[.50] px-8  w-[100%] py-8 rounded-md flex justify-between gap-6 text-white">
            <Image
              src={imageUrl}
              width={120}
              alt=""
              priority={false}
              className="w-[80%] md:w-[40%]  "
            />
            <div className="w-[60%]">
              <h5 className=" text-xl font-bold capitalize ">{title} </h5>
              <p className="text-sm  mt-4">{spec}</p>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default SpecCard;
