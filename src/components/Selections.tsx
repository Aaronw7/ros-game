/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ChoiceProps {
  src: string;
  alt: string;
  outerBgColor: string;
}

interface SelectionsProps {
  onSelect: (choice: 'Rock' | 'Paper' | 'Scissors') => void;
}

const Choice: React.FC<ChoiceProps> = ({ src, alt, outerBgColor }) => {
  return (
    <div className={`flex justify-center items-center w-40 md:w-56 h-40 md:h-56 rounded-full ${outerBgColor} hover:bg-opacity-75 transition duration-300 hover:cursor-pointer`}>
      <div className="flex justify-center items-center w-28 md:w-44 h-28 md:h-44 border rounded-full bg-white shadow-2xl shadow-inner">
        <img src={src} alt={alt} className="w-12 md:w-20 h-auto bg-white" />
      </div>
    </div>
  )
}

const Selections: React.FC<SelectionsProps> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-auto w-auto justify-between items-center gap-12">
        {/* paper */}
        <Choice src="/images/icon-paper.svg" alt="paper image" outerBgColor="bg-blue-500" />
        {/* scissors */}
        <Choice src="/images/icon-scissors.svg" alt="scissors image" outerBgColor="bg-yellow-500" />
      </div>
      <div className="flex h-auto justify-center items-center">
        {/* rock */}
        <Choice src="/images/icon-rock.svg" alt="rock image" outerBgColor="bg-red-500" />
      </div>
    </div>
  )
}

export default Selections;