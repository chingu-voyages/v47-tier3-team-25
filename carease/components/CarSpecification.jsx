import React from 'react';

const CarSpecification = ({
  model,
  mpg,
  engine,
  fuelType,
  driveTrain,
  transmission,
  exterior,
  convenience,
}) => {
  return (
    <>
      {[
        model,
        mpg,
        engine,
        fuelType,
        driveTrain,
        transmission,
        exterior,
        convenience,
      ].map((item, index) => (
        <li key={index} className="h-10">
          {item}
        </li>
      ))}
    </>
  );
};

export default CarSpecification;
