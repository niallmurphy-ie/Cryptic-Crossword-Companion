import returnAbbreviations from './parseClues/abbreviations';
import returnIndicators from './parseClues/indicators';

const addClueData = (clue) => {
    let clueOut = {};
    clueOut['clueText'] = clue;
    clueOut['abbreviations'] = returnAbbreviations(clue);
    clueOut['indicators'] = returnIndicators(clue);
    return clueOut;
};


export default addClueData;
