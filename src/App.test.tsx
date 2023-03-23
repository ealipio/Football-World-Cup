import App from './App';
import { render, screen, within, fireEvent } from '@testing-library/react';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('when user go to page first time a message should appear', () => {
    const text = screen.getByText(
      /no games provided, go to section and add a new game ☝/i
    );
    expect(text).toBeInTheDocument();
  });

  test('should contain RESULTS section', async () => {
    const element = screen.getByText(/results/i);
    expect(element).toBeInTheDocument();
  });
  test('should contain MANAGE section', async () => {
    const list = screen.getByRole('list');
    const element = within(list).getByText(/manage/i);
    expect(element).toBeInTheDocument();
  });
  test('when user click on manage', () => {
    const list = screen.getByRole('list');
    const manageElement = within(list).getByText(/manage/i);
    fireEvent.click(manageElement);
    const startGameButton = screen.getByRole('button', {
      name: /start game/i,
    });
    expect(startGameButton).toBeInTheDocument();
  });
  test('click on start game button show country select and save and close buttons', () => {
    const list = screen.getByRole('list');
    const manageElement = within(list).getByText(/manage/i);
    fireEvent.click(manageElement);
    const startGameButton = screen.getByRole('button', {
      name: /start game/i,
    });
    fireEvent.click(startGameButton);
    const saveBtn = screen.getByRole('button', {
      name: /save/i,
    });
    expect(saveBtn).toBeInTheDocument();
    const closeBtn = screen.getByRole('button', {
      name: /close/i,
    });
    expect(closeBtn).toBeInTheDocument();
  });
  test('adding a new game', () => {
    const list = screen.getByRole('list');
    const manageElement = within(list).getByText(/manage/i);
    fireEvent.click(manageElement);
    const startGameButton = screen.getByRole('button', {
      name: /start game/i,
    });
    fireEvent.click(startGameButton);
    // select
    const homeSelect = screen.getByLabelText(/home Team/i);
    fireEvent.change(homeSelect, { target: { value: 'PE' } });

    const awaySelect = screen.getByLabelText(/away team/i);
    fireEvent.change(awaySelect, { target: { value: 'BR' } });

    const saveBtn = screen.getByRole('button', {
      name: /save/i,
    });

    fireEvent.click(saveBtn);
  });
  test('after add a game, results page have an image flag for away and home team', () => {
    // results
    const homeImg = screen.getByRole('img', {
      name: /home/i,
    });

    const awayImg = screen.getByRole('img', {
      name: /home/i,
    });

    expect(homeImg).toBeInTheDocument();
    expect(awayImg).toBeInTheDocument();
  });
  test('initial score assigned for each team is 0', () => {
    const vs = screen.getByText(/0 0/i);
    expect(vs).toBeInTheDocument();
  });
});
