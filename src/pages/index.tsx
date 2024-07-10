/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Selections from '../components/Selections';

export default function Home() {
  const [selection, setSelection] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [score, setScore] = useState(0);

  const handleSelection = (choice: 'Rock' | 'Paper' | 'Scissors') => {
    setSelection(choice);
    // Update the score logic here
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-12 px-8 bg-custom-radial`}
    >
      <div className="flex justify-between w-full md:w-7/12 max-w-xl p-6 border border-headerOutline rounded-lg">
        <div className="flex flex-col justify-center">
          <p className="font-barlow font-bold text-2xl md:text-3xl">ROCK</p>
          <p className="font-barlow font-bold text-2xl md:text-3xl -my-3">PAPER</p>
          <p className="font-barlow font-bold text-2xl md:text-3xl">SCISSORS</p>
        </div>
        <div className="flex flex-col p-3 w-24 h-20 border rounded-lg justify-center items-center bg-white">
          <p className="font-barlow font-semibold text-xs text-scoreText">SCORE</p>
          <p className="font-barlow font-bold text-5xl text-darkText">{score}</p>
        </div>
      </div>
      <Selections onSelect={handleSelection} />
      <div className="flex w-full justify-end">section 3</div>
    </main>
  );
}
