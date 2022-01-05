import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DogList from './DogList';

test('DogList renders a list of dogs', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogList />
    </MemoryRouter>
  );

  await screen.findByText('Barton');
  await screen.findByText('Liliana');
  await screen.findByText('Melba');
  expect(container).toMatchSnapshot();
});
