import React, { useState } from 'react';
import SpellcheckForm from './SpellcheckForm';
import SpellcheckResults from './SpellcheckResults';
import '../App.css';

const SpellcheckApp = () => {
  const [results, setResults] = useState({ correct: null, suggestions: [] });
  const [showResults, setShowResults] = useState(false);
  
  
  // Handle updating results and showing the modal
  const handleResultsUpdate = (newResults) => {
    setResults(newResults);
    setShowResults(true);
  };


  const handleCloseResults = () => {
    // Hide the results modal
    setShowResults(false);
  };

  return (
    <div>
      <h1>Spellchecker App</h1>
      <SpellcheckForm onResultsUpdate={handleResultsUpdate} />

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
