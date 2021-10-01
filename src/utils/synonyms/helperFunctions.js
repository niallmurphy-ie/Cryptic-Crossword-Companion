
import ignorewords from '../../data/ignorewords';
import { clueLength } from './../parseClues/helperFunctions';


export const synonymsParse = (response) => {
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

export const filterReturnedSynonyms = (synonyms, clue) => {
	if (!synonyms) return;

	const cLength = clueLength(clue);
	// Order by length
	synonyms = synonyms.sort();
	// Filter length
	return synonyms.filter((synonym) => {
		 // if (synonym.split(' ').length > 1) return false;
		 if (synonym.length > cLength) return false;
		 return true;
	});
};

export const filterWords = (clue) => {
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
