import React, { useState } from 'react';
import { checkSpelling } from '../actions/actions';
import '../App.css'; 


const SpellcheckForm = ({ onResultsUpdate }) => {
  const [word, setWord] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the checkSpelling function from actions.js 
    const spellingResults = await checkSpelling(word);
    // Propagate the results to the parent component
    onResultsUpdate(spellingResults);
    // Clean the input value after submission
    setWord("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SpellcheckForm;
