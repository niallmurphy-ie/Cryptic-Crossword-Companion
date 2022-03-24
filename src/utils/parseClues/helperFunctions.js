const splitToWords = require('split-to-words');

export function splitWords(str) {
    // Leave in ' for abbreviations
    str = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~]/g, '');
    return splitToWords(str);
}

export function countWords(str) {
    return str.trim().split(/\s+/).length;
}

export function removePunctuation(clue) {
    clue = clue.replace(/'/g, ' ');
    return clue.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~]/g, '');
}
