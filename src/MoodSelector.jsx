import { useState } from "react";
//import Button from "./components/Button";
function MoodSelector({ onSubmit }) {
    const [selectedMood, setSelectedMood] = useState(null);
  
    const handleMoodSelect = (mood) => {
      setSelectedMood(mood);
    };
  
    const handleSubmit = () => {
      onSubmit(selectedMood);
      setSelectedMood(null); 
    };
  
    return (
      <div className=" mt-10 p-4 border border-black shadow-md w-fit flex flex-col rounded-lg justify-center items-center">
        <h2 className="font-bold">Sélection de l'Humeur</h2>
        <div className="p-2 flex gap-2">
          <button className="p-1 border border-black bg-green-200 rounded-md" onClick={() => handleMoodSelect('heureux')}>Heureux</button>
          <button className="p-1 border border-black bg-gray-200 rounded-md" onClick={() => handleMoodSelect('triste')}>Triste</button>
          <button className="p-1 border border-black bg-red-200 rounded-md" onClick={() => handleMoodSelect('en colère')}>En colère</button>
         
        </div>
        <button className="p-1 bg-slate-100 border border-yellow-200 rounded-md" onClick={handleSubmit}>Soumettre</button>
      </div>
    );
  }
  export default MoodSelector;