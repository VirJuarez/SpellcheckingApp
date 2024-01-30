const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../dictionary.txt');


////* Read the content of the 'dictionary.txt' file and train the model *////

function words(text) {
    return text.toLowerCase().match(/[a-z']+/g) || [];
}

function train(features) {
    const model = {};
    for (const f of features) {
        model[f] = (model[f] || 0) + 1;
    }
    return model;
}

const content = fs.readFileSync(filePath, 'utf-8');
const NWORDS = train(words(content));


////* Main function to correct a word*////

function correct(word) {
    // Check if the word is correct and has the correct format
    if (validWordFormat(word) && word.toLowerCase() in NWORDS) {
        // The word is correct - no mixed-casing
        return true;
    }

    // Clean the word by limiting repeating characters
    const cleanedWord = limitRepeatingCharacters(word.toLowerCase());

    // Find suggestions for distance-1 edits
    const candidates = known([cleanedWord, ...edits1(cleanedWord)]);
    if ([...candidates].length !== 0) {
        // The word is not correct - distance-1 edits suggestions found
        return [...candidates];
    }

    // Find suggestions for distance-2 edits
    const candidates2 = known_edits2(cleanedWord);
    if ([...candidates2].length !== 0) {
        // The word is not correct - distance-2 edits suggestions found
        return [...candidates2];
    }

    // The word is not correct - no suggestions found
    return false;
}


////*Auxiliary functions to validate word format*////

// Function to validate the format of a word (mixed-casing)
function validWordFormat(word) {
    // Include apostrophe '
    return /^(?:[a-z']+|[A-Z']+|[A-Z'][a-z']+)$/.test(word);
}

// Function to limit repeating characters in a word
function limitRepeatingCharacters(word) {
    // Use a regular expression to find any letter or character repeated more than 2 times consecutively
    const regex = /(.)(\1{2,})/g;
    // Replace repeating characters with two instances of the same character
    const modifiedWord = word.replace(regex, '$1$1');
    return modifiedWord;
}


////*Auxiliary functions to find suggestions*////

// Define the alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz\'';

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

module.exports = { correct };
