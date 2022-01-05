import { render, screen } from '@testing-library/react';
import DogDetail from './DogDetail';

test('DogDetail renders an individual dog with details', async () => {
  const { container } = render(<DogDetail match={{ params: { id: 14 } }} />);

  screen.getByText('...getting ready to introduce...');

  await screen.findByText('Eyes');
  await screen.findByText('Gentle giant with eyes that will melt your soul.');

  expect(container).toMatchSnapshot();
});
