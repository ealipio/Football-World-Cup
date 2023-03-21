import React from 'react';

import { page, pages, DEFAULT_PAGE } from '../store/gameStore';

interface INavBar {
  onSelectPage: (parameter: page) => void;
}

export const Navbar: React.FC<INavBar> = ({ onSelectPage }) => {
  const [resultsPage, managePage] = pages;
  const [selectedMenuItem, setSelectedMenuItem] =
    React.useState<page>(DEFAULT_PAGE);

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
          id={resultsPage}
          className={`cursor-pointer ${
            selectedMenuItem === resultsPage ? 'text-red-600' : ''
          }`}
        >
          Results
        </li>
        <li
          onClick={handleSelectPage}
          id={managePage}
          className={`cursor-pointer ${
            selectedMenuItem === managePage ? 'text-red-600' : ''
          }`}
        >
          Manage
        </li>
      </ul>
    </nav>
  );
};
