import React from 'react';
import { useGameStore } from '../store/gameStore';

export const Results: React.FC = () => {
  const games = useGameStore((state) => state.games);
  return (
    <div className="p-4">
      <h1 className="uppercase font-bold m-2">{new Date().toDateString()}</h1>

      {games.map((game) => {
        return (
          <div
            key={game.id}
            className="flex justify-between items-center gap-4 mb-2 text-slate-500"
          >
            <div className="flex">
              <span className="mx-2 w-60 text-sm">{game.home.name}</span>
              <img
                className=""
                src={`https://flagsapi.com/${game.home.code}/flat/32.png`}
              />
              <span className="mx-2 w-60 text-sm">{game.home.score}</span>
            </div>

            <div className="font-bold uppercase text-sm  w-24 basis-10 text-red-800">
              vs
            </div>

            <div className=" flex">
              <span className="mx-2 w-60 text-sm">{game.away.name}</span>
              <img
                className=""
                src={`https://flagsapi.com/${game.away.code}/flat/32.png`}
              />
              <span className="mx-2 w-60 text-sm">{game.away.score}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
