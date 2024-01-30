const fs = require('fs');
const spellCheckService = require('../services/spellcheckService');

const spellCheck = (req, res) => {
  try {
    const word = req.params.word;
    const result = spellCheckService.correct(word)
    //Word is correct - no suggestions
    if (result === true) {
      res.status(200).json({ suggestions: [], correct: true });
    } 
    //Word is incorrect - no suggestion found
    else if (result === false){
      res.status(200).json({suggestions: "No suggestions, please try again!", correct: false })
    }
    //Word is incorrect - suggestions found
    else {
      const suggestions = result;
      res.status(200).json({ suggestions, correct: false });
    }
  }catch(error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { spellCheck };
