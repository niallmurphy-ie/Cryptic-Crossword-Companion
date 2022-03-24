import ignorewords from '../../data/ignorewords';

export const synonymsParse = (response) => {
	let synonyms = [];
	if (!response) return;
	response.data[0].meanings.forEach((meaning) => {
		if (
			meaning['partOfSpeech'] === 'noun' ||
			meaning['partOfSpeech'] === 'adjective' ||
			meaning['partOfSpeech'] === 'adverb' ||
			meaning['partOfSpeech'] === 'verb'
		) {
			meaning.definitions.forEach((definition) => {
				synonyms = [...synonyms, definition.synonyms];
			});
		}
	});
	const merged = [].concat.apply([], synonyms);
	return merged;
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
