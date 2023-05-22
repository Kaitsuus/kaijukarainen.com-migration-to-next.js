import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/app/page';

test('renders navbar', () => {
  const { getByTestId } = render(<Home />);
  const navbar = getByTestId('navbar');
  expect(navbar).toBeInTheDocument();
});
