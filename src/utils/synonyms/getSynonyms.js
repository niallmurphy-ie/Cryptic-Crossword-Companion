import axios from 'axios';
import {
	synonymsParse,
	filterReturnedSynonyms,
	filterWords,
} from './helperFunctions';

const getSynonyms = async (
	clue,
	currentActive,
	appSynonyms,
	setAppSynonyms
) => {
	const words = filterWords(clue);
	const synonyms = {};
	const requests = [];
	words.forEach((word) => {
		requests.push(
			axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
		);
	});
	const responses = await Promise.allSettled(requests);
	if (responses) {
		responses.map((response) => {
			if (response) {
				const syns = synonymsParse(response.value);
				if (syns && syns.length > 0) {
					const filtered = filterReturnedSynonyms(syns, clue);
					if (filtered && filtered.length > 0) {
						synonyms[response.value.data[0].word] = filtered;
					}
				}
			}
		});
		let updatedSynonyms = { ...appSynonyms };
		updatedSynonyms[currentActive] = {
			synonymLength: 1,
			synonymData: synonyms,
		};
		// Set App State
		setAppSynonyms(updatedSynonyms);
	}
};

export default getSynonyms;
