/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Selections from '../components/Selections';
import Results from '../components/Results';
import Rules from '../components/Rules';
import { generateGameId } from '../utils/generateGameId';

export default function Home() {
  const router = useRouter();
  const [playerSelection, setPlayerSelection] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [opponentSelection, setOpponentSelection] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelection = (choice: 'Rock' | 'Paper' | 'Scissors') => {
    setPlayerSelection(choice);
    const opponentChoice = getRandomChoice();
    setOpponentSelection(opponentChoice);
  };

  const getRandomChoice = (): 'Rock' | 'Paper' | 'Scissors' => {
    const choices = ['Rock', 'Paper', 'Scissors'] as const;
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const updateScores = (result: string) => {
    if (result === 'YOU WIN') {
      setWin((prevWin) => prevWin + 1);
    } else if (result === 'YOU LOSE') {
      setLoss((prevLoss) => prevLoss + 1);
    }
  };

  const resetGame = async () => {
    setPlayerSelection(null);
    setOpponentSelection(null);
  };

  const handlePlayWithFriend = () => {
    const gameId = generateGameId();
    router.push(`/two-player/${gameId}`);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-12 px-8 bg-custom-radial overflow-hidden`}
    >
      <Head>
        <title>Rock Paper Scissors Project</title>
        <meta name="description" content="The same childhood game capable of playing with a bot or with a friend" />
      </Head>
      <div className="flex flex-col justify-start items-center w-full">
        <Header win={win} loss={loss} />
        {playerSelection && opponentSelection ? (
          <Results playerSelection={playerSelection} opponentSelection={opponentSelection} updateScores={updateScores} resetGame={resetGame} />
        ): (
          <Selections onSelect={handleSelection} />
        )}
      </div>
      <div className="flex w-full justify-center md:justify-between gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
          onClick={handlePlayWithFriend}
        >
          PLAY WITH A FRIEND
        </button>
        <Rules isOpen={modalOpen} onClose={closeModal} />
        <button
          className="bg-transparent text-white font-semibold py-2 px-4 border border-headerOutline hover:border-white rounded hover:cursor-pointer"
          onClick={openModal}
        >
          RULES
        </button>
      </div>
    </main>
  );
}
