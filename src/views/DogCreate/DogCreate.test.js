import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DogCreate from './DogCreate';

test('DogCreate should render an empty form', () => {
  const { container } = render(
    <MemoryRouter>
      <DogCreate />
    </MemoryRouter>
  );

  screen.getAllByDisplayValue('');

  expect(container).toMatchSnapshot();
});
