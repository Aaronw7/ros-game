/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface SelectProps {
  src: string;
  alt: 'Rock' | 'Paper' | 'Scissors';
  outerBgColor: string;
}

interface ResultsProps {
  selection: 'Rock' | 'Paper' | 'Scissors';
}

const Select: React.FC<SelectProps> = ({ src, alt, outerBgColor }) => {
  return (
    <div
      className={`flex justify-center items-center w-40 md:w-56 h-40 md:h-56 rounded-full ${outerBgColor} hover:bg-opacity-75 transition duration-300`}
    >
      <div className="flex justify-center items-center w-28 md:w-44 h-28 md:h-44 border rounded-full bg-white">
        <img src={src} alt={alt} className="w-12 md:w-20 h-auto bg-white" />
      </div>
    </div>
  )
}

const Results: React.FC<ResultsProps> = ({ selection }) => {
  const getSelectionImage = (choice: 'Rock' | 'Paper' | 'Scissors') => {
    switch (choice) {
      case 'Rock':
        return { src: '/images/icon-rock.svg', bgColor: 'bg-red-500' };
      case 'Paper':
        return { src: '/images/icon-paper.svg', bgColor: 'bg-blue-500' };
      case 'Scissors':
        return { src: '/images/icon-scissors.svg', bgColor: 'bg-yellow-500' };
      default:
        return { src: '', bgColor: '' };
    }
  };

  const { src, bgColor } = getSelectionImage(selection);

  return (
    <div className="flex flex-col w-full items-center gap-2">
      <h2 className="text-2xl">You selected: {selection}</h2>
      <Select src={src} alt={selection} outerBgColor={bgColor} />
    </div>
  )
}

export default Results;