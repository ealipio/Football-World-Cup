import { Scores } from './Scores';
import { INITIAL_GAME } from '../../store/gameStore';
import { render, screen } from '@testing-library/react';

const game = {
  id: 1,
  home: {
    name: 'Peru',
    code: 'PE',
    score: 5,
  },
  away: {
    name: 'Brazil',
    code: 'BR',
    score: 2,
  },
};

describe('Scores component', () => {
  test('should render the scores for the home and away teams', () => {
    const { getByText } = render(<Scores game={game} />);
    expect(getByText(/5 2/i)).toBeInTheDocument();
  });
});
