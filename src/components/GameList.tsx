import React from 'react';

import { useGameStore, IGame, team, INITIAL_SCORE } from '../store/gameStore';

interface IGameListProps {}

export const GameList: React.FC<IGameListProps> = () => {
  const games = useGameStore((state) => state.games);
  const finishGame = useGameStore((state) => state.finishGame);
  const updateGame = useGameStore((state) => state.updateGame);

  const handleFinishGame = (gameId: number) => () => {
    finishGame(gameId);
  };

  const handleChangeHome =
    (game: IGame, team: team) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedTeam = { ...game[team], score: Number(e.target.value) };
      const updatedGame = { ...game, [team]: updatedTeam };
      console.log(game, updatedGame);
      updateGame(updatedGame);
    };
  return (
    <div className="m-4 my-6">
      <h1 className="uppercase font-bold m-2 mb-6">Game List:</h1>

      {games.map((game) => {
        return (
          <div
            key={game.id}
            className="flex justify-between items-center gap-4 mb-2 text-slate-500"
          >
            <div className="flex">
              <span className="mx-2 uppercase w-60 text-sm">
                {game.home.name}
              </span>
              <input
                type="number"
                min={INITIAL_SCORE}
                value={game.home.score}
                onChange={handleChangeHome(game, 'home')}
                className="border w-12 text-center"
              />
            </div>

            <div className="font-bold uppercase text-sm  w-24 basis-10 text-red-800">
              vs
            </div>

            <div className=" flex">
              <span className="mx-2 uppercase w-60 text-sm">
                {game.away.name}
              </span>
              <input
                type="number"
                min={INITIAL_SCORE}
                value={game.away.score}
                onChange={handleChangeHome(game, 'away')}
                className="border w-12 text-center"
              />
              <button
                onClick={handleFinishGame(game.id)}
                className=" mx-6 border bg-indigo-500 text-white uppercase py-1 px-2 rounded hover:bg-indigo-600 font-bold text-xs"
              >
                finish
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
