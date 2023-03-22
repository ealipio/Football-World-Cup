import React from 'react';
import { useGameStore } from '../store/gameStore';

export const Results: React.FC = () => {
  const games = useGameStore((state) => state.games);
  return (
    <div className="p-4">
      <h1 className="uppercase font-bold m-2 mb-4">
        {new Date().toDateString()}
      </h1>

      {games.map((game) => {
        return (
          <div
            key={game.id}
            className="flex justify-evenly items-center mb-2 text-slate-600  bg-sky-100 shadow"
          >
            <div className="flex flex-col items-center content-center  w-full">
              <div className="text-md text-center font-bold uppercase">
                {game.home.name}
              </div>
              <div>
                <img
                  src={`https://flagsapi.com/${game.home.code}/flat/64.png`}
                />
              </div>
            </div>

            <div className="text-6xl font-bold  text-center w-full">
              {game.home.score} <span className="text-gray-400">:</span>{' '}
              {game.away.score}
            </div>

            <div className="flex flex-col items-center content-center w-full">
              <div className="text-md font-bold text-center uppercase">
                {game.away.name}
              </div>
              <div>
                <img
                  src={`https://flagsapi.com/${game.away.code}/flat/64.png`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
