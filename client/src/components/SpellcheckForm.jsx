// SpellcheckForm.js
import React, { useState } from 'react';
import { checkSpelling } from '../actions/actions';
import '../App.css'; // Importar el archivo CSS

const SpellcheckForm = ({ onResultsUpdate }) => {
  const [word, setWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamar a la función checkSpelling desde actions.js con Axios
    const spellingResults = await checkSpelling(word);

    // Propagar los resultados al componente padre
    onResultsUpdate(spellingResults);
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
