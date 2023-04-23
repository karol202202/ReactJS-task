import { render, screen } from '@testing-library/react';
import { Card } from '../Card';


test('renders Card component with children', () => {
  render(<Card><p data-testid="children"></p></Card>);
  const children = screen.getByTestId('children');
  expect(children).toBeInTheDocument();
});
