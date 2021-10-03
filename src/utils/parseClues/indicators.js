import { countWords } from './helperFunctions';
// JSON
import insertionWords from '../../data/insertionWords';
import generalDeletionWords from '../../data/generalDeletionWords';
import hiddenWords from '../../data/hiddenWords';
import spoonerWords from '../../data/spoonerWords';
import letterSwapWords from '../../data/letterSwapWords';
import reverseWords from '../../data/reversalWords';
import palindromeWords from '../../data/palindromeWords';
import linkingWords from '../../data/linkingWords';
import letterSelectionWords from '../../data/letterSelectionWords';
import juxtapositionWords from '../../data/juxtapositionWords';
import homophoneWords from '../../data/homophoneWords';
import anagramWords from '../../data/anagramWords';

const clueTypes = [
    ['anagram', anagramWords],
    ['insertion', insertionWords],
    ['deletion', generalDeletionWords],
    ['hidden', hiddenWords],
    ['spoon', spoonerWords],
    ['letter movement', letterSwapWords],
    ['reversal', reverseWords],
    ['palindrome', palindromeWords],
    ['linking', linkingWords],
    ['letter selection', letterSelectionWords],
    ['juxtaposition', juxtapositionWords],
    ['homophones', homophoneWords],
];

// Check indicators
function returnIndicators(clueText) {
    let returnArray = [];

    // Get words from each type
    clueTypes.forEach((clueType) => {
        const result = parseIndicators(
            clueType[0],
            clueText,
            clueType[1].words
        );
        if (result) returnArray.push(result);
    });
    return reverseIndicators(returnArray);
}

// Hacky reverse indicators for better readability.
const reverseIndicators = (indicators) => {
    const reversed = {};
    indicators.forEach((o) => {
        for (let type in o) {
            const words = o[type];
            words.forEach((w) => {
                if (reversed[w]) reversed[w].push(type);
                if (!reversed[w]) {
                    reversed[w] = [type];
                }
            });
        }
    });
    const reversed2 = [];
    for (let section in reversed) {
        reversed2.push({ [section]: reversed[section] });
    }
    return reversed2;
};


const parseIndicators = (type, clueText, words) => {
    var endArray = [];
    for (var i = 0; i < words.length; i++) {
        // First Check if it includes it
        if (clueText.toLowerCase().includes(words[i].toLowerCase())) {
            // Check for multiple words as these won't be mistakes
            if (countWords(words[i]) > 1) {
                endArray.push(words[i]);
            } else {
                // One word must be checked as it may be inside words
                const splitClue = clueText.toLowerCase().split(' ');
                if (splitClue.includes(words[i].toLowerCase())) {
                    endArray.push(words[i]);
                }
            }
        }
    }
    if (endArray.length > 0) {
        return { [type]: endArray };
    }
    return null;
};

export default returnIndicators;
