import './App.css';
import React from 'react';
import MoodSelector from './MoodSelector';
function App() { 
  
  const handleSubmit = (selectedMood) => {
    console.log(`Humeur sélectionnée: ${selectedMood}`);
    // Vous pouvez stocker les données localement ou les envoyer à une console/log ici
    alert(`Merci pour votre humeur: ${selectedMood}.`);
  };


  return (

    <div className='flex h-auto justify-center w-auto items-center'>
      <MoodSelector onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
