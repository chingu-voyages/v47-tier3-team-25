import React from 'react';

const FilterSidebar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className=" w-[300px] flex flex-col gap-10 ml-8 border-l-8 border-gray-400 md:px-6 xl:px-10 cursor-pointer py-6">
      <div onClick={() => scrollToSection('superCars')}>
        <span>Super Cars</span>
      </div>
      <div onClick={() => scrollToSection('popularCars')}>
        <span>Popular Cars</span>
      </div>
      <div onClick={() => scrollToSection('upcomingCars')}>
        <span>Upcoming Cars</span>
      </div>
      <div onClick={() => scrollToSection('otherCars')}>
        <span>Other Cars</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
