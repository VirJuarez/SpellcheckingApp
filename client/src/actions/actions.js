// actions.js
import axios from 'axios';

export const checkSpelling = async (word) => {
  try {
    const response = await axios.get(`http://localhost:31337/spellcheck/${word}`);
    console.log(responde.data)
    return response.data;
  } catch (error) {
    console.error("Error checking spelling:", error);
    return { correct: false, suggestions: [] };
  }
};
