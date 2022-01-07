import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DogList from './DogList';

test('DogList renders a list of dogs', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogList />
    </MemoryRouter>
  );

  screen.getByText('...checking our list of furry friends...');

  await screen.findByText('Barkley');
  await screen.findByText('Goldie');
  await screen.findByText('Beatrix');

  expect(container).toMatchSnapshot();
});
