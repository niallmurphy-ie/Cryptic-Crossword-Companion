import { countWords } from './helperFunctions';
// JSON
import indicators from '../../data/indicators';
import insertionWords from '../../data/insertionWords';
import containmentWords from '../../data/containmentWords';
import generalDeletionWords from '../../data/generalDeletionWords';
import hiddenWords from '../../data/hiddenWords';
import spoonerWords from '../../data/spoonerWords';
import letterSwapWords from '../../data/letterSwapWords';
import reverseLeftWords from '../../data/reverseLeftWords';
import reverseUpwardsWords from '../../data/reverseUpwardsWords';

// Check indicators
function returnIndicators(clueText) {
    let returnArray = [];
    /**
     * Go through Indicators
     *  */
    // Insertions
    const returnedInsertions = parseIndicators(
        'Insertions',
        clueText,
        insertionWords.words
    );
    if (returnedInsertions) returnArray.push(returnedInsertions);
    // Containment
    const containment = parseIndicators(
        'Containment',
        clueText,
        containmentWords.words
    );
    if (containment) returnArray.push(containment);
    // General Deletion
    const deletion = parseIndicators(
        'General Deletion',
        clueText,
        generalDeletionWords.words
    );
    if (deletion) returnArray.push(deletion);
    // Hidden words
    const hidden = parseIndicators('Hidden Words', clueText, hiddenWords.words);
    if (hidden) returnArray.push(hidden);
    // Spooner
    const spooner = parseIndicators('Spooner', clueText, spoonerWords.words);
    if (spooner) returnArray.push(spooner);
    // Letter Swap
    const swap = parseIndicators(
        'Letter Swap / Movement',
        clueText,
        letterSwapWords.words
    );
    if (swap) returnArray.push(swap);
    // Reverse Left
    const left = parseIndicators(
        'Reverse left',
        clueText,
        reverseLeftWords.words
    );
    if (left) returnArray.push(left);

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
        const clueTypeTitle = type;
        return { [clueTypeTitle]: endArray };
    }
    return null;
};

export default returnIndicators;
