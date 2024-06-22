import Link from 'next/link';
import React from 'react';
import SpecCard from './SpecCard';

const VerticalMenu = ({ spec, title }) => {
  return (
    <>
      <div className="flex flex-col p-4 rounded-md">
        <div className="flex flex-col text-md text-bold gap-4">
          <SpecCard spec={spec} title={title} />
        </div>
      </div>
    </>
  );
};

export default VerticalMenu;
