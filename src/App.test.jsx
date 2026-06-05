import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders name passed through props', () => {
  render(<Header name="Cindy" />);
  expect(screen.getByText("Cindy's Blog")).toBeInTheDocument();
});