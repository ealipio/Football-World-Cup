import React from 'react';

import {
  useGameStore,
  IGame,
  ITeam,
  ICountry,
  INITIAL_GAME,
  INITIAL_SCORE,
} from '../store/gameStore';

import { Selector } from './Shared/Selector';
import { GameList } from './GameList';

export const Manage: React.FC = () => {
  const [startGame, setStartGame] = React.useState<boolean>(false);
  const [isSaveDisabled, setIsSaveDisabled] = React.useState<boolean>(true);

  const [game, setGame] = React.useState<IGame>(INITIAL_GAME);

  const countries = useGameStore((state) => state.countries);
  const games = useGameStore((state) => state.games);
  const saveGame = useGameStore((state) => state.saveGame);

  const handleStartGame = () => {
    setStartGame(!startGame);
  };
  const validateGame = ({ home, away }: { home: ITeam; away: ITeam }) => {
    const hasHome = Boolean(home.name);
    const hasAway = Boolean(away.name);
    const hasBothTeams = hasHome && hasAway;
    const areDifferentTeams = home.code !== away.code;
    // message: teams are already on the board
    const gameIsAlreadyInStore = games.filter((gameInStore) => {
      return (
        gameInStore.away.code === away.code &&
        gameInStore.home.code === home.code
      );
    });

    const IsAlreadyInStore = gameIsAlreadyInStore.length > 0;
    return hasBothTeams && areDifferentTeams && !IsAlreadyInStore;
  };

  const handleSave = () => {
    const isValidGame = validateGame(game);
    if (isValidGame) {
      const id = new Date().getTime();
      saveGame({ ...game, id });
    }
    // disabled after save since selector keeps state
    setIsSaveDisabled(isValidGame);
  };
  const handleChangeCountry = (country: ICountry, teamType: string) => {
    const newGame = {
      ...game,
      [teamType]: { ...country, score: INITIAL_SCORE },
    };
    setGame(newGame);
    setIsSaveDisabled(!validateGame(newGame));
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <button
          onClick={handleStartGame}
          className={`${
            startGame && 'hidden'
          } bg-indigo-500 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded border  uppercase w-full md:w-auto `}
        >
          start game
        </button>
      </div>

      <div
        className={`${
          !startGame && 'hidden'
        } flex justify-between gap-2 flex-col md:flex-row`}
      >
        <div className="w-full md:w-1/2">
          <Selector
            onChangeCountry={handleChangeCountry}
            countries={countries}
            teamType="home"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Selector
            onChangeCountry={handleChangeCountry}
            countries={countries}
            teamType="away"
          />
        </div>

        <div className="">
          <button
            onClick={handleSave}
            disabled={isSaveDisabled}
            className="bg-indigo-500 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded border  uppercase h-full w-full md:w-auto disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            Save
          </button>
        </div>

        <div className="">
          <button
            onClick={handleStartGame}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border  uppercase h-full w-full md:w-auto"
          >
            close
          </button>
        </div>
      </div>

      <GameList />
    </div>
  );
};
