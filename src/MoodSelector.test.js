import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MoodSelector from './MoodSelector';

test('rendu initial du composant MoodSelector', () => {
  render(<MoodSelector />);

});

test('sélectionne et soumet une humeur', () => {
  const onSubmitMock = jest.fn();
  const { getByText } = render(<MoodSelector onSubmit={onSubmitMock} />);

 
  fireEvent.click(getByText('Heureux'));
  fireEvent.click(getByText('Triste'));  
  fireEvent.click(getByText('En colère')); 
  
  expect(getByText('heureux')).toBeInTheDocument();
  expect(getByText('Triste')).toBeInTheDocument();
  expect(getByText('En colère')).toBeInTheDocument();

  
  fireEvent.click(getByText('Soumettre'));

 
  expect(onSubmitMock).toHaveBeenCalledWith('heureux');
  expect(onSubmitMock).toHaveBeenCalledWith('Triste');
  expect(onSubmitMock).toHaveBeenCalledWith('En colère');
});
