/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface RulesProps {
  isOpen: boolean;
  onClose: () => void;
}

const Rules: React.FC<RulesProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900 text-xl" id="modal-title">Welcome to Rock Paper Scissors</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">The rules are quite simple. It is just like how you remembered growing up.</p>
                  </div>
                  <div className="flex flex-col mt-4 items-center">
                    <p className="text-sm text-black"><span className="text-red-500">ROCK</span> beats <span className="text-yellow-500">SCISSORS</span></p>
                    <p className="text-sm text-black"><span className="text-yellow-500">SCISSORS</span> beats <span className="text-blue-500">PAPER</span></p>
                    <p className="text-sm text-black"><span className="text-blue-500">PAPER</span> beats <span className="text-red-500">ROCK</span></p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-black">Enjoy the game!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 sm:ml-3 sm:w-auto">UNDERSTOOD!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rules;