import { countWords } from './helperFunctions';
// JSON
import insertionWords from '../../data/insertionWords';
import containmentWords from '../../data/containmentWords';
import generalDeletionWords from '../../data/generalDeletionWords';
import hiddenWords from '../../data/hiddenWords';
import spoonerWords from '../../data/spoonerWords';
import letterSwapWords from '../../data/letterSwapWords';
import reverseWords from '../../data/reverseLeftWords';
import palindromeWords from '../../data/palindromeWords';
import linkingWords from '../../data/linkingWords';
import letterSelectionWords from '../../data/letterSelectionWords';
import letterDeletionWords from '../../data/letterDeletionWords';
import juxtapositionWords from '../../data/juxtapositionWords';
import homophoneWords from '../../data/homophoneWords';
import anagramWords from '../../data/anagramWords';

// Check indicators
function returnIndicators(clueText) {
    let returnArray = [];
    /**
     * Go through Indicators
     *  */
    const clueTypes = [
        ['Anagrams', anagramWords],
        ['Insertions', insertionWords],
        ['Containment', containmentWords],
        ['General Deletion', generalDeletionWords],
        ['Hidden Words', hiddenWords],
        ['Spooner', spoonerWords],
        ['Letter Swap / Movement', letterSwapWords],
        ['Reversal', reverseWords],
        ['Palindrome', palindromeWords],
        ['Linking Words', linkingWords],
        ['Letter Selection', letterSelectionWords],
        ['Letter Deletion', letterDeletionWords],
        ['Juxtaposition', juxtapositionWords],
        ['Homophones', homophoneWords],
    ];
    // Get words from each type
    clueTypes.forEach((clueType) => {
        const result = parseIndicators(clueType[0], clueText, clueType[1].words);
        if (result) returnArray.push(result);
    });
    return returnArray;
}

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
