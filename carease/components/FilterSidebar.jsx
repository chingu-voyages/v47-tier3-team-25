import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="flex flex-col gap-10 ml-8 border-l-8 border-gray-400 px-10 cursor-pointer py-6">
      <span>Super Cars</span>
      <span>Popular Cars</span>
      <span>Upcoming Cars</span>
      <span>New Cars</span>
    </div>
  );
};

export default FilterSidebar;
