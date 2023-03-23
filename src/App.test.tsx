import App from './App';
import { render, screen, within, fireEvent } from '@testing-library/react';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('displays a message when the user visits the page for the first time', () => {
    const message = screen.getByText(
      /no games provided, go to section and add a new game ☝/i
    );
    expect(message).toBeInTheDocument();
  });

  describe('navbar', () => {
    test('contains a "RESULTS" section', () => {
      const resultsLink = screen.getByText(/results/i);
      expect(resultsLink).toBeInTheDocument();
    });

    test('contains a "MANAGE" section', () => {
      const manageList = screen.getByRole('list');
      const manageLink = within(manageList).getByText(/manage/i);
      expect(manageLink).toBeInTheDocument();
    });
  });

  describe('manage section', () => {
    beforeEach(() => {
      const manageList = screen.getByRole('list');
      const manageLink = within(manageList).getByText(/manage/i);
      fireEvent.click(manageLink);
    });

    test('displays a "Start Game" button', () => {
      const startGameButton = screen.getByRole('button', {
        name: /start game/i,
      });
      expect(startGameButton).toBeInTheDocument();
    });

    test('clicking "Start Game" displays the country select and save and close buttons', () => {
      const startGameButton = screen.getByRole('button', {
        name: /start game/i,
      });
      fireEvent.click(startGameButton);
      const saveButton = screen.getByRole('button', {
        name: /save/i,
      });
      const closeButton = screen.getByRole('button', {
        name: /close/i,
      });
      expect(saveButton).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
    });

    test('adding a new game displays the "Game List" label', () => {
      const startGameButton = screen.getByRole('button', {
        name: /start game/i,
      });
      fireEvent.click(startGameButton);
      const homeSelect = screen.getByLabelText(/home team/i);
      const awaySelect = screen.getByLabelText(/away team/i);
      const saveButton = screen.getByRole('button', { name: /save/i });
      fireEvent.change(homeSelect, { target: { value: 'PE' } });
      fireEvent.change(awaySelect, { target: { value: 'BR' } });
      fireEvent.click(saveButton);
      const gameListLabel = screen.getByText(/game list/i);
      expect(gameListLabel).toBeInTheDocument();
    });
  });

  test('after add a game, results page have an image flag for away and home team', () => {
    // results
    const homeImg = screen.getByRole('img', {
      name: /home/i,
    });

    const awayImg = screen.getByRole('img', {
      name: /away/i,
    });

    expect(homeImg).toBeInTheDocument();
    expect(awayImg).toBeInTheDocument();
  });
  test('initial score assigned for each team in Results Page is 0', () => {
    const vs = screen.getByText(/0 0/i);
    expect(vs).toBeInTheDocument();
  });
});
