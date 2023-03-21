import React from 'react';

import { page } from '../store/gameStore';

interface INavBar {
  onSelectPage: (parameter: page) => void;
}

const INITIAL_PAGE = 'summary';

export const Navbar: React.FC<INavBar> = ({ onSelectPage }) => {
  const [selectedMenuItem, setSelectedMenuItem] =
    React.useState<page>(INITIAL_PAGE);

  const handleSelectPage = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent> & { target: HTMLLIElement }
  ) => {
    const page = e.target.id as page;
    onSelectPage(page);
    setSelectedMenuItem(page);
  };

  return (
    <nav className="h-10 bg-gray-300 text-black">
      <ul className="flex items-center justify-between h-full px-10">
        <li
          onClick={handleSelectPage}
          id="summary"
          className={`cursor-pointer ${
            selectedMenuItem === 'summary' ? 'text-red-600' : ''
          }`}
        >
          Summary
        </li>
        <li
          onClick={handleSelectPage}
          id="settings"
          className={`cursor-pointer ${
            selectedMenuItem === 'settings' ? 'text-red-600' : ''
          }`}
        >
          Settings
        </li>
      </ul>
    </nav>
  );
};
