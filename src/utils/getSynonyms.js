import axios from 'axios';
import ignorewords from '../data/ignorewords';
import { clueLength } from './parseClues/helperFunctions';

const getSynonyms = async (clue, setSynonyms) => {
    const words = filterWords(clue);
    const synonyms = {};
    const requests = [];
    requests.push(
        words.forEach(async (word) => {
            const syns = await synonymsAPI(word);
            if (syns.length > 0) {
                const filtered = filterReturnedSynonyms(syns, clue);
                if (filtered.length > 0) {
                    synonyms[word] = filtered;
                }
            }
        })
    );
    axios
        .all(requests)
        .then(
            axios.spread((...responses) => {
                console.log(responses);
                setSynonyms(synonyms);
            })
        )
        .catch(() => {
            console.log('There has been an error getting synonyms.');
        });
};

const filterReturnedSynonyms = (synonyms, clue) => {
    if (!synonyms) return;

    const cLength = clueLength(clue);
    return synonyms.filter((synonym) => {
        if (synonym.split(' ').length > 1) return false;
        if (synonym.length > cLength) return false;
        return true;
    });
};

const synonymsAPI = async (word) => {
    const response = await axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .catch((error) => {
            return;
        });

    let synonyms = [];
    if (!response) return;
    response.data[0].meanings.forEach((meaning) => {
        if (
            meaning['partOfSpeech'] == 'noun' ||
            meaning['partOfSpeech'] == 'adjective'
        ) {
            meaning.definitions.forEach((definition) => {
                synonyms = [...synonyms, definition.synonyms];
            });
        }
    });
    const merged = [].concat.apply([], synonyms);
    return merged;
};

const filterWords = (clue) => {
    const words = clue
        // Brackets
        .replace(/ *\([^)]*\) */g, '')
        // Punctuation
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .trim()
        .split(/\s+/);
    const filtered = words.filter((w) => !ignorewords['words'].includes(w));
    return filtered;
};

export default getSynonyms;
