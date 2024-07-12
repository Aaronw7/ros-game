/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface HeaderProps {
  win: number;
  loss: number;
}

const Header: React.FC<HeaderProps> = ({ win, loss }) => {
  return (
    <div className="flex justify-between w-full md:w-7/12 max-w-xl p-6 border border-headerOutline rounded-lg mb-6">
      <div className="flex flex-col justify-center">
        <p className="font-bold text-2xl md:text-3xl text-white">ROCK</p>
        <p className="font-bold text-2xl md:text-3xl -my-3 text-white">PAPER</p>
        <p className="font-bold text-2xl md:text-3xl text-white">SCISSORS</p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col p-3 w-16 md:w-24 h-16 md:h-20 border rounded-lg justify-center items-center bg-white">
          <p className="font-semibold text-xs text-scoreText">WIN</p>
          <p className="font-bold text-2xl md:text-5xl text-darkText">{win}</p>
        </div>
        <div className="flex flex-col p-3 w-16 md:w-24 h-16 md:h-20 border rounded-lg justify-center items-center bg-white">
          <p className="font-semibold text-xs text-lossText">LOSE</p>
          <p className="font-bold text-2xl md:text-5xl text-darkText">{loss}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;