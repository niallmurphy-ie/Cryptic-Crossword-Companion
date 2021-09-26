import { countWords } from './helperFunctions';
// JSON
import indicators from '../../data/indicators';
import insertions from '../../data/insertions';
// Check indicators
function returnIndicators(clueText) {
    let returnArray = [];
    // Go through object
    const returnedInsertions = parseIndicators(
        'Insertions',
        clueText,
        insertions.words
    );
    if (returnedInsertions)
        returnArray = returnArray.concat(returnedInsertions);
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
