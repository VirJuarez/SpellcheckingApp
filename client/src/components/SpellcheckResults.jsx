import React from 'react';
import '../App.css'; 

//Modal - it shows the result of the request: correct / suggestions

const SpellcheckResults = ({ correct, suggestions, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      <p>Correct: {correct?.toString()}</p>
      {!correct && <p>Suggestions: {suggestions.join(', ')}</p>}
    </div>
  </div>
);

export default SpellcheckResults;
