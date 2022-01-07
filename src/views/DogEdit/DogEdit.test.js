import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DogEdit from './DogEdit';

test('DogEdit renders a form to the page with pre-filled data', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogEdit match={{ params: { id: 6 } }} />
    </MemoryRouter>
  );

  await screen.findByDisplayValue('Sadie');
  await screen.findByText(
    `When she's not busy being your admirer, Sadie likes to curl up and take a nap. Great with kids and other mellow pets!`
  );

  expect(container).toMatchSnapshot();
});
