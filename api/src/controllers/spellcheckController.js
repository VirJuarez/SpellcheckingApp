const fs = require('fs');
const spellCheckService = require('../services/spellcheckService');
//const dictionaryPath = '../dictionary.txt';

const spellCheck = (req, res) => {
  const word = req.params.word;
  //const dictionary = fs.readFileSync(dictionaryPath, 'utf-8').split('\n');
  const result = spellCheckService.correct(word)
  if (typeof result == "string"){
    res.status(404).json({suggestions: ["No suggestions, please try again!"], correct: false })
  }
  if (result.length === 0) {
    res.status(200).json({ suggestions: [], correct: true });
  } else {
    const suggestions = result;
    res.status(200).json({ suggestions, correct: false });
  }
};

module.exports = { spellCheck };
