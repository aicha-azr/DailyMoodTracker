import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MoodSelector from './MoodSelector';

test('sélectionne et soumet une humeur', () => {
  const onSubmitMock = jest.fn();
  render(<MoodSelector onSubmit={onSubmitMock} />);

  // Sélectionne l'humeur "heureux"
  fireEvent.click(screen.getByText('Heureux'));

  // Vérifie si l'humeur sélectionnée est affichée correctement
  expect(screen.getByText('heureux')).toBeInTheDocument();

  // Soumet l'humeur sélectionnée
  fireEvent.click(screen.getByText('Soumettre'));

  // Vérifie si le callback onSubmit a été appelé avec l'humeur sélectionnée
  expect(onSubmitMock).toHaveBeenCalledWith('heureux');
});
