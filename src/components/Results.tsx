/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ResultsProps {
  selection: string;
}

const Results: React.FC<ResultsProps> = ({ selection }) => {
  return (
    <div className="flex justify-between w-full md:w-7/12 max-w-xl p-6 border border-headerOutline rounded-lg">
      <div className="flex flex-col justify-center">
        <p className="font-barlow font-bold text-2xl md:text-3xl">{selection}</p>
      </div>
    </div>
  )
}

export default Results;