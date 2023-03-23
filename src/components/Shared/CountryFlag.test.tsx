import { CountryFlag } from './CountryFlag';
import { render } from '@testing-library/react';

describe('CountryFlag', () => {
  test('renders team name', () => {
    const team = {
      name: 'Spain',
      code: 'ES',
    };
    const { getByText } = render(<CountryFlag team={team} altText="flag" />);
    expect(getByText('Spain')).toBeInTheDocument();
  });
});
