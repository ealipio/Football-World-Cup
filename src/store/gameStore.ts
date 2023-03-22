import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import countries from './countries.json';

export type page = 'results' | 'manage';
export type team = 'home' | 'away';

export const DEFAULT_PAGE: page = 'results';

export const pages: page[] = ['results', 'manage'];

export const INITIAL_SCORE = 0;
export const INITIAL_GAME: IGame = {
  id: 0,
  away: { name: '', code: '' },
  home: { name: '', code: '' },
};
export interface ICountry {
  name: string;
  code: string;
}

export interface ITeam {
  name: string;
  code: string;
  score?: number;
}
export interface IGame {
  id: number;
  home: ITeam;
  away: ITeam;
}
interface IGameStore {
  games: IGame[];
  countries: ICountry[];
  saveGame: (game: IGame) => void;
  updateGame: (game: IGame) => void;
  finishGame: (gameId: number) => void;
}
// <img src="https://flagsapi.com/BE/flat/64.png">

export const useGameStore = create<IGameStore>()(
  persist(
    (set) => ({
      games: [],
      countries,
      updateGame: (game) =>
        set((currentState) => {
          const copyOfGames = [...currentState.games];
          // using index to avoid modify the order
          const index = copyOfGames.findIndex((item) => {
            return item.id === game.id;
          });
          // updating game
          copyOfGames[index] = game;
          return { games: copyOfGames };
        }),
      finishGame: (gameId) =>
        set((currentState) => {
          const gamesFiltered = currentState.games.filter(
            (game) => game.id !== gameId
          );
          return { games: gamesFiltered };
        }),
      saveGame: (game) =>
        set((currentState) => {
          return { games: [...currentState.games, game] };
        }),
    }),
    {
      name: 'Game',
    }
  )
);
