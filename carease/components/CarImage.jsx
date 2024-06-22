import Image from 'next/image';
import React from 'react';

const CarImage = ({ imgUrl, altTag }) => {
  return (
    <div className="flex items-end h-[130px] sm:h-[200px] md:h-[280px] lg:h-[500px] relative ">
      <Image
        src={imgUrl}
        width={200}
        height={200}
        alt={altTag}
        className=" w-[100%] h-[60%]"
      />
    </div>
  );
};

export default CarImage;
