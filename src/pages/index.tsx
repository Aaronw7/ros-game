/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Selections from '../components/Selections';
import Results from '../components/Results';
import { generateGameId } from '../utils/generateGameId';

export default function Home() {
  const router = useRouter();
  const [selection, setSelection] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(2);

  const handleSelection = (choice: 'Rock' | 'Paper' | 'Scissors') => {
    setSelection(choice);
    // Update the score logic here
    setWin((prevScore) => prevScore + 1);
  };

  const handlePlayWithFriend = () => {
    const gameId = generateGameId();
    router.push(`/two-player/${gameId}`);
  };

  const updateScores = (result: string) => {
    if (result === 'You win') {
      setWin((prevWin) => prevWin + 1);
    } else if (result === 'You lose') {
      setLoss((prevLoss) => prevLoss + 1);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-12 px-8 bg-custom-radial`}
    >
      <div className="flex flex-col justify-start items-center w-full">
        <Header win={win} loss={loss} />
        {/* {selection ? (
          <Results selection={selection} updateScores={updateScores} />
        ): (
          <Selections onSelect={handleSelection} />
        )} */}
      </div>
      <div className="flex w-full justify-center md:justify-between gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
          onClick={handlePlayWithFriend}
        >
          PLAY WITH A FRIEND
        </button>
        <button className="bg-transparent text-white font-semibold py-2 px-4 border border-headerOutline hover:border-white rounded hover:cursor-pointer">
          RULES
        </button>
      </div>
    </main>
  );
}
