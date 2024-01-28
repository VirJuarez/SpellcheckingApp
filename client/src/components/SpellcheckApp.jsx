// SpellcheckApp.js
import React, { useState } from 'react';
import SpellcheckForm from './SpellcheckForm';
import SpellcheckResults from './SpellcheckResults';

const SpellcheckApp = () => {
  const [results, setResults] = useState({ correct: null, suggestions: [] });
  const [showResults, setShowResults] = useState(false);

  const handleResultsUpdate = (newResults) => {
    // Actualizar el estado con los resultados
    setResults(newResults);
    // Mostrar el modal de resultados
    setShowResults(true);
  };

  const handleCloseResults = () => {
    // Ocultar el modal de resultados
    setShowResults(false);
  };

  return (
    <div>
      {/* Componente de formulario */}
      <SpellcheckForm onResultsUpdate={handleResultsUpdate} />

      {/* Mostrar el modal de resultados si showResults es true */}
      {showResults && (
        <SpellcheckResults
          correct={results.correct}
          suggestions={results.suggestions}
          onClose={handleCloseResults}
        />
      )}
    </div>
  );
};

export default SpellcheckApp;
