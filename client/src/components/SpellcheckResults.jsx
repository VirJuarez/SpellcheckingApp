// SpellcheckResults.js
import React from 'react';

const SpellcheckResults = ({ correct, suggestions }) => (
  <div>
    <p>Correct: {correct?.toString()}</p>
    {!correct && <p>Suggestions: {suggestions.join(', ')}</p>}
  </div>
);

export default SpellcheckResults;
