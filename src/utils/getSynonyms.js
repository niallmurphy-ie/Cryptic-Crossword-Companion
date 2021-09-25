import axios from 'axios';
import ignorewords from '../data/ignorewords';
import { clueLength } from './parseClues/helperFunctions';

const getSynonyms = async (clue) => {
    const words = filterWords(clue);
	 console.log(words);
    const synonyms = {};
    const requests = [];
    requests.push(
        words.forEach(async (word) => {
            synonyms[word] = filterReturnedSynonyms(await synonymsAPI(word), clue);
        })
    );
    Promise.all(requests).then(console.log(synonyms));
};

const filterReturnedSynonyms = (synonyms, clue) => {
	if (!synonyms) return;
	const cLength = clueLength(clue);
	console.log(`Clue Length: ${cLength}`)
	return synonyms.filter(synonym => synonym.length < cLength + 1);
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
        meaning.definitions.forEach((definition) => {
            synonyms = [...synonyms, definition.synonyms];
        });
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
