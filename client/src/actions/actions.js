import axios from 'axios';

// Function to check spelling of the provided word using the spellcheck API
export const checkSpelling = async (word) => {
  try {
    const response = await axios.get(`http://localhost:31337/spellcheck/${word}`);
    return response.data;
  } catch (error) {
    return { correct: false, suggestions: "Sorry, your word couldn't be processed correctly." };
  }
};
