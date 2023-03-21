import App from './App';
import { render, screen } from '@testing-library/react';

describe('Simple working test', () => {
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Hello!/i)).toBeInTheDocument();
  });

  test.todo('should increment count on click', async () => {
    //const app = render(<App />);
    //app.debug();
    //expect(app).toBeInTheDocument();
    //expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
    //expect(await screen.findByText(/count is: 2/i)).toBeInTheDocument();
  });

  test.todo('pending test');
});
