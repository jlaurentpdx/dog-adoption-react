import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DogDetail from './DogDetail';

test.only('DogDetail renders an individual dog with details', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogDetail match={{ params: { id: 6 } }} />
    </MemoryRouter>
  );

  screen.getByText('...getting ready to introduce...');

  await screen.findByText('Sadie');
  await screen.findByText(
    `When she's not busy being your admirer, Sadie likes to curl up and take a nap. Great with kids and other mellow pets!`
  );

  expect(container).toMatchSnapshot();
});
