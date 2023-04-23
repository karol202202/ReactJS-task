import { render, screen } from '@testing-library/react';
import { Container } from '../Container';


test('renders Container component with children', () => {
  render(<Container><p data-testid="children"></p></Container>);
  const children = screen.getByTestId('children');
  expect(children).toBeInTheDocument();
});
