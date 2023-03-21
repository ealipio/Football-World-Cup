import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type page = 'results' | 'manage';

export const DEFAULT_PAGE: page = 'results';

export const pages: page[] = ['results', 'manage'];
interface IGameStore {
  versus: [];
  addGame: () => void;
}

export const useGameStore = create<IGameStore>()(
  persist(
    (set) => ({
      versus: [],
      addGame: () => set(() => ({ versus: [] })),
    }),
    {
      name: 'Game',
    }
  )
);