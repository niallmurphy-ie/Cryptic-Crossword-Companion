import { splitWords, countWords } from './helperFunctions';
// JSON
import abbreviations from '../../data/abbreviations';

const returnAbbreviations = (clue) => {
	clue = clue.toLowerCase();
	const abbArray = [];
	// Loop abbreviations
	for (let abbreviation in abbreviations) {
		// First check for included anywhere
		abbreviation = abbreviation.toLowerCase();
		if (clue.includes(abbreviation)) {
			// Check for multiple words as these won't be mistakes
			if (countWords(abbreviation) > 1) {
				abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
			} else {
				// One word must be checked as it may be inside words
				const split = splitWords(clue);
				if (split.includes(abbreviation)) {
					abbArray.push({
						[abbreviation]: abbreviations[abbreviation],
					});
				}
			}
		}
	}
	return abbArray.sort((a, b) => {
		const sa = clue.toLowerCase().indexOf(a);
		const sb = clue.toLowerCase().indexOf(b);
		if (sa < sb) return -1;
		if (sa > sb) return 1;
		return 0;
	});
};

export default returnAbbreviations;
