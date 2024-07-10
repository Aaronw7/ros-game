/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

interface SelectProps {
  src: string;
  alt: 'Rock' | 'Paper' | 'Scissors';
  outerBgColor: string;
}

interface ResultsProps {
  playerSelection: 'Rock' | 'Paper' | 'Scissors';
  opponentSelection: 'Rock' | 'Paper' | 'Scissors';
  updateScores: (result: string) => void;
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
  );
};

const Results: React.FC<ResultsProps> = ({ playerSelection, opponentSelection, updateScores }) => {
  // const [opponentMove, setOpponentMove] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [result, setResult] = useState<string | null>(null);
  // const playerId = localStorage.getItem('playerId');

  // useEffect(() => {
  //   if (!gameId) return;

  //   const channel = pusher.subscribe(`private-game-${gameId}`);

  //   channel.bind('selection-made', (data: { move: 'Rock' | 'Paper' | 'Scissors', playerId: string }) => {
  //     if (data.playerId !== playerId) {
  //       setOpponentMove(data.move);
  //       determineResult(selection, data.move);
  //     }
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [gameId, selection, playerId]);

  useEffect(() => {
    determineResult(playerSelection, opponentSelection);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerSelection, opponentSelection]);

  const determineResult = (playerMove: 'Rock' | 'Paper' | 'Scissors', opponentMove: 'Rock' | 'Paper' | 'Scissors') => {
    let gameResult;
    if (playerMove === opponentMove) {
      gameResult = 'Draw';
    } else if (
      (playerMove === 'Rock' && opponentMove === 'Scissors') ||
      (playerMove === 'Scissors' && opponentMove === 'Paper') ||
      (playerMove === 'Paper' && opponentMove === 'Rock')
    ) {
      gameResult = 'You win';
    } else {
      gameResult = 'You lose';
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
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:gap-32">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl">You selected: {playerSelection}</h2>
          <Select src={playerImage.src} alt={playerSelection} outerBgColor={playerImage.bgColor} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl">Opponent selected: {opponentSelection}</h2>
          <Select src={opponentImage.src} alt={opponentSelection as 'Rock' | 'Paper' | 'Scissors'} outerBgColor={opponentImage.bgColor} />
        </div>
      </div>
      {result && <h2 className="text-2xl">Result: {result}</h2>}
    </div>
  );
};

export default Results;
