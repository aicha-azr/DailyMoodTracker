import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('rendu initial du composant App', () => {
  render(<App />);
 
});

test('rendu du composant MoodSelector dans App', () => {
  const { getByText } = render(<App />);
  const moodSelectorElement = getByText('Sélection de l\'Humeur');
  expect(moodSelectorElement).toBeInTheDocument();
});
