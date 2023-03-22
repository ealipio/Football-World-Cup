import { Scores } from './Scores';
import { INITIAL_GAME } from '../../store/gameStore';
import { render, screen } from '@testing-library/react';

describe('Scores component', () => {
  test.todo('should render home score', () => {
    render(<Scores game={INITIAL_GAME} />);
  });

  test.todo('should render away team score', () => {});
  test.todo('should render :', () => {});
});
