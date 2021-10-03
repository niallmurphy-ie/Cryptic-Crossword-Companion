import returnAbbreviations from './parseClues/abbreviations';
import returnIndicators from './parseClues/indicators';

const addClueData = (clue) => {
    clue = clue.toLowerCase();
    let clueOut = {};
    clueOut['clueText'] = clue;
    clueOut['abbreviations'] = returnAbbreviations(clue);
    clueOut['indicators'] = returnIndicators(clue);
    console.log(clueOut.indicators);
    return clueOut;
};


export default addClueData;
