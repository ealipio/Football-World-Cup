import { CountryFlag } from './CountryFlag';
import { INITIAL_GAME } from '../../store/gameStore';
import { render, screen } from '@testing-library/react';

describe('CountryFlag component', () => {
  test.todo('should render country name', () => {
    render(<CountryFlag team={INITIAL_GAME.away} />);
  });

  test.todo('should render an image', () => {});
});
