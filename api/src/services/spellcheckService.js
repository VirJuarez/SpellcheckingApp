const fs = require('fs');

// Function to split a text into lowercase words
function words(text) {
    return text.toLowerCase().match(/[a-z']+/g) || [];
}


// Function to validate the format of a word
function validWordFormat(word) {
    // Include apostrophe '
    return /^(?:[a-z']+|[A-Z']+|[A-Z'][a-z']+)$/.test(word);
    // Original regex without apostrophe validation:
    // return /^(?:[a-z]+|[A-Z]+|[A-Z][a-z]+)$/.test(word);
}

// Function to limit repeating characters in a word
function limitRepeatingCharacters(word) {
    // Use a regular expression to find any letter or character repeated more than 2 times consecutively
    const regex = /(.)(\1{2,})/g;

    // Replace repeating characters with two instances of the same character
    const modifiedWord = word.replace(regex, '$1$1');

    return modifiedWord;
}

// Function to train the word model
function train(features) {
    const model = {};
    for (const f of features) {
        model[f] = (model[f] || 0) + 1;
    }
    return model;
}

// Read the content of the 'dictionary.txt' file and train the model
const content = fs.readFileSync('../dictionary.txt', 'utf-8');
const NWORDS = train(words(content));

// Define the alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz\'';
;

// Function to generate distance-1 edits in a word
function edits1(word) {
    const s = [];
    for (let i = 0; i <= word.length; i++) {
        s.push([word.slice(0, i), word.slice(i)]);
    }

    const deletes = s.filter(([a, b]) => b).map(([a, b]) => a + b.slice(1));
    const transposes = s.filter(([a, b]) => b.length > 1).map(([a, b]) => a + b[1] + b[0] + b.slice(2));
    const replaces = s.flatMap(([a, b]) => alphabet.split('').map(c => a + c + b.slice(1)));
    const inserts = s.flatMap(([a, b]) => alphabet.split('').map(c => a + c + b));
    const repeats = s.filter(([a, b]) => b.length > 1 && b[0] === b[1]).map(([a, b]) => a + b.slice(1));

    return new Set([...deletes, ...transposes, ...replaces, ...inserts, ...repeats]);
}

// Function to get known distance-2 edits of a word
function known_edits2(word) {
    return new Set(
        [...edits1(word)].flatMap(e1 => [...edits1(e1)].filter(e2 => e2 in NWORDS))
    );
}

// Function to get known words from a set of words
function known(words) {
    return new Set(words.filter(w => w in NWORDS));
}

// Main function to correct a word
function correct(word) {
    if (validWordFormat(word) && word.toLowerCase() in NWORDS) {
        // The word is in NWORDS, return an empty array
        return [];
    }


    word = limitRepeatingCharacters(word.toLowerCase());
    const candidates = known([word, ...edits1(word)]);

    // Select the candidate with the highest frequency in the model
    if ([...candidates].length !== 0) {
        return [...candidates];
    }
    const candidates2 = known_edits2(word);
    if ([...candidates2].length !== 0) {
        return [...candidates2];
    }
    return "error";
}


module.exports = { correct };
