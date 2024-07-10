/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ChoiceProps {
  src: string;
  alt: 'Rock' | 'Paper' | 'Scissors';
  outerBgColor: string;
  onSelect: (choice: 'Rock' | 'Paper' | 'Scissors') => void;
}

const Choice: React.FC<ChoiceProps> = ({ src, alt, outerBgColor, onSelect }) => {
  return (
    <div
      className={`flex justify-center items-center w-40 md:w-56 h-40 md:h-56 rounded-full ${outerBgColor} hover:bg-opacity-75 transition duration-300 hover:cursor-pointer`}
      onClick={() => onSelect(alt)}
    >
      <div className="flex justify-center items-center w-28 md:w-44 h-28 md:h-44 border rounded-full bg-white">
        <img src={src} alt={alt} className="w-12 md:w-20 h-auto bg-white" />
      </div>
    </div>
  )
}

export default Choice;