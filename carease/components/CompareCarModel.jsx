import React, { useState } from 'react';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import Button from './Button';
import Link from 'next/link';
const CompareCarModel = ({ handleModel }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');

  const handleCarSelection = (e) => {
    setSelectedCar(e.target.value);
  };

  return (
    <div className="absolute bottom-0 right-0 w-[250px] h-auto bg-rose-600 rounded-md drop-shadow-lg">
      <span onClick={handleModel} className="absolute right-4 text-2xl top-4 ">
        <MdOutlineCancelPresentation />
      </span>
      <div className="">
        <div className="mt-6">
          <h6>Select One Car</h6>
          {['Audi', 'Masarati', 'BMW', 'Mclaren', 'Nissan'].map((car) => (
            <div key={car}>
              <input
                type="radio"
                id={car}
                name="car"
                value={car}
                checked={selectedCar === car}
                onChange={handleCarSelection}
                className="mr-2 focus:outline-none"
              />
              <label htmlFor={car}>{car}</label>
            </div>
          ))}
          <Link href="/compare">
            <Button
              styleType={'border-2 border-[#D9D9D9]'}
              name="Compare Car"
            />
          </Link>
        </div>
        {/* <button
          onClick={() => setShowMore(!showMore)}
          className="absolute bottom-4 right-4"
        >
          More ..
        </button> */}
      </div>
    </div>
  );
};

export default CompareCarModel;
