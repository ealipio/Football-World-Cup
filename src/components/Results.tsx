import React from 'react';

import { useGameStore } from '../store/gameStore';
import { CountryFlag } from './Shared/CountryFlag';
import { Scores } from './Shared/Scores';

export const Results: React.FC = () => {
  const games = useGameStore((state) => state.games);

  if (games.length === 0) {
    return (
      <div className="uppercase m-10 p-10 bg-sky-100">
        No Games provided, go to <b>Manage</b> section and add a new game
        &#x261D;
      </div>
    );
  }
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
            <CountryFlag altText="home" team={game.home} />
            <Scores game={game} />
            <CountryFlag altText="away" team={game.away} />
          </div>
        );
      })}
    </div>
  );
};
