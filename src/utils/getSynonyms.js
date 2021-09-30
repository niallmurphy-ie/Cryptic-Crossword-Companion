import axios from 'axios';
import ignorewords from '../data/ignorewords';
import { clueLength } from './parseClues/helperFunctions';

const getSynonyms = async (
    clue,
    currentActive,
    appSynonyms,
    setAppSynonyms
) => {
    const words = filterWords(clue);
    const synonyms = {};
    const requests = [];
    words.forEach(async (word) => {
        requests.push(
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        );
    });
    axios
        .all(requests)
        .then(
            axios.spread((...responses) => {
                responses.map((response) => {
                    const syns = synonymsParse(response);
                    if (syns.length > 0) {
                        const filtered = filterReturnedSynonyms(syns, clue);
                        if (filtered.length > 0) {
                            synonyms[response.data[0].word] = filtered;
                        }
                    }
                });
                let updatedSynonyms = { ...appSynonyms };
                updatedSynonyms[currentActive] = {
                    synonymLength: 0,
                    synonymData: synonyms,
                };
                // Set App State
                setAppSynonyms(updatedSynonyms);
            })
        )
        .catch(() => {
            console.log('There has been an error getting synonyms.');
        });
};

const synonymsParse = (response) => {
    let synonyms = [];
    if (!response) return;
    response.data[0].meanings.forEach((meaning) => {
        if (
            meaning['partOfSpeech'] === 'noun' ||
            meaning['partOfSpeech'] === 'adjective'
        ) {
            meaning.definitions.forEach((definition) => {
                synonyms = [...synonyms, definition.synonyms];
            });
        }
    });
    const merged = [].concat.apply([], synonyms);
    return merged;
};

const filterReturnedSynonyms = (synonyms, clue) => {
    if (!synonyms) return;

    const cLength = clueLength(clue);
    // Order by length
    synonyms = synonyms.sort();
    // Filter length
    return synonyms.filter((synonym) => {
        if (synonym.split(' ').length > 1) return false;
        if (synonym.length > cLength) return false;
        return true;
    });
};

const filterWords = (clue) => {
    const words = clue
        // Brackets
        .replace(/ *\([^)]*\) */g, '')
        // Punctuation
        .replace(/[.,\/#!$%\^&\*;:{}'=\-—_`~()]/g, '')
        .trim()
        .split(/\s+/);
    const filtered = words.filter((w) => !ignorewords['words'].includes(w));
    return filtered;
};

export default getSynonyms;
