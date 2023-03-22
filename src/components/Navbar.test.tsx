import { Navbar } from './Navbar';
import { render, screen } from '@testing-library/react';

describe('NavBar component', () => {
  test.todo('should render two li items', () => {
    render(<Navbar onSelectPage={() => {}} />);
  });

  test.todo('should exist a selected item by default', () => {});
});
