// SpellcheckerApp.js (o cualquier nombre que desees)
import React, { useState } from 'react';
import SpellcheckForm from './SpellcheckForm';
import SpellcheckResults from './SpellcheckResults';

const SpellcheckApp = () => {
  const [results, setResults] = useState({ correct: null, suggestions: [] });

  const handleResultsUpdate = (newResults) => {
    // Actualizar el estado con los resultados
    setResults(newResults);
  };

  return (
    <div>
      {/* Componente de formulario */}
      <SpellcheckForm onResultsUpdate={handleResultsUpdate} />

      {/* Componente de resultados */}
      <SpellcheckResults {...results} />
    </div>
  );
};

export default SpellcheckApp;
