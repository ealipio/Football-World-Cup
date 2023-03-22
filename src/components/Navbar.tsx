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
    <nav className="h-10 bg-slate-900 text-white">
      <ul className="flex items-center justify-center h-full px-10 uppercase">
        <li
          onClick={handleSelectPage}
          id={resultsPage}
          className={` mx-10 cursor-pointer ${
            selectedMenuItem === resultsPage ? 'text-emerald-400' : ''
          }`}
        >
          Results
        </li>
        <li
          onClick={handleSelectPage}
          id={managePage}
          className={`cursor-pointer ${
            selectedMenuItem === managePage ? 'text-emerald-400' : ''
          }`}
        >
          Manage
        </li>
      </ul>
    </nav>
  );
};
