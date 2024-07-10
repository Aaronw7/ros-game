/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

interface SelectProps {
  src: string;
  alt: 'Rock' | 'Paper' | 'Scissors';
  outerBgColor: string;
  opponent?: boolean
}

interface ResultsProps {
  playerSelection: 'Rock' | 'Paper' | 'Scissors';
  opponentSelection: 'Rock' | 'Paper' | 'Scissors';
  updateScores: (result: string) => void;
}

const Select: React.FC<SelectProps> = ({ src, alt, outerBgColor, opponent }) => {
  return (
    <div
      className={`flex justify-center items-center w-40 md:w-56 h-40 md:h-56 rounded-full ${outerBgColor} hover:bg-opacity-75 transition duration-300 ${opponent ? 'animate-scale-up' : ''}`}
    >
      <div className="flex justify-center items-center w-28 md:w-44 h-28 md:h-44 border rounded-full bg-white">
        <img src={src} alt={alt} className="w-12 md:w-20 h-auto bg-white" />
      </div>
    </div>
  );
};

const Results: React.FC<ResultsProps> = ({ playerSelection, opponentSelection, updateScores }) => {
  const [result, setResult] = useState<string | null>(null);
  const [resultAnimated, setResultAnimated] = useState(false);
  const [opponentAnimated, setOpponentAnimated] = useState(false);

  useEffect(() => {
    determineResult(playerSelection, opponentSelection);
    setOpponentAnimated(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerSelection, opponentSelection]);

  useEffect(() => {
    if (result) {
      const timeout = setTimeout(() => {
        setResultAnimated(true);
      }, 2000); // 2-second delay
      return () => clearTimeout(timeout);
    }
  }, [result]);

  const determineResult = (playerMove: 'Rock' | 'Paper' | 'Scissors', opponentMove: 'Rock' | 'Paper' | 'Scissors') => {
    let gameResult;
    if (playerMove === opponentMove) {
      gameResult = 'DRAW';
    } else if (
      (playerMove === 'Rock' && opponentMove === 'Scissors') ||
      (playerMove === 'Scissors' && opponentMove === 'Paper') ||
      (playerMove === 'Paper' && opponentMove === 'Rock')
    ) {
      gameResult = 'YOU WIN';
    } else {
      gameResult = 'YOU LOSE';
    }
    setResult(gameResult);
    updateScores(gameResult);
  };

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

  const playerImage = getSelectionImage(playerSelection);
  const opponentImage = getSelectionImage(opponentSelection);

  return (
    <div className="flex flex-col w-full items-center gap-2">
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 md:gap-32 md:my-12">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-2xl">YOU PICKED</h2>
          <Select src={playerImage.src} alt={playerSelection} outerBgColor={playerImage.bgColor} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-2xl">OPPONENT PICKED</h2>
          <Select src={opponentImage.src} alt={opponentSelection as 'Rock' | 'Paper' | 'Scissors'} outerBgColor={opponentImage.bgColor} opponent={opponentAnimated} />
        </div>
      </div>
      {resultAnimated && (
        <h2 className={`font-bold text-5xl md:text-7xl ${resultAnimated ? 'animate-slide-in' : ''} ${result === "YOU LOSE" ? 'text-lossText' : 'text-green-500'}`}>
        {result}
      </h2>
      )}
    </div>
  );
};

export default Results;
