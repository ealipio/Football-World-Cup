import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type page = 'summary' | 'settings';

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
