// SpellcheckApp.js
import React, { useState } from 'react';
import SpellcheckForm from './SpellcheckForm';
import SpellcheckResults from './SpellcheckResults';
import '../App.css'; // Importar el archivo CSS

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
      <h1>Spellchecker App</h1>
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
