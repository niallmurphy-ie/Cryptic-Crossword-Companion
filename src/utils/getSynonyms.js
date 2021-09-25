import axios from 'axios';
import ignorewords from '../data/ignorewords';

const getSynonyms = async (clue) => {
    const words = filterWords(clue);
    const synonyms = {};
    const requests = [];
    requests.push(
        words.forEach(async (word) => {
            synonyms[word] = await synonymsAPI(word);
        })
    );
    Promise.all(requests).then(console.log(synonyms));
};

const filterReturnedSynonyms = (synonyms, clue) => {};

const synonymsAPI = async (word) => {
    const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let synonyms = [];
    response.data[0].meanings.forEach((meaning) => {
        meaning.definitions.forEach((definition) => {
            synonyms = [...synonyms, definition.synonyms];
        });
    });
    const merged = [].concat.apply([], synonyms);
    return merged;
};

const filterWords = (clue) => {
    const words = clue
        .replace(/ *\([^)]*\) */g, '')
        .trim()
        .split(/\s+/);
    const filtered = words.filter((w) => !ignorewords['words'].includes(w));
    return filtered;
};

export default getSynonyms;
