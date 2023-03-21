import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Simple working test', () => {
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Hello!/i)).toBeInTheDocument();
  });

  test('should increment count on click', async () => {
    const app = render(<App />);
    //app.debug();
    //expect(app).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is: 2/i)).toBeInTheDocument();
  });

  test.todo('pending test');
});
