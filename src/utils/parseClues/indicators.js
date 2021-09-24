import { countWords } from './helperFunctions';
// JSON
import indicators from '../../data/indicators';

// Check indicators
function returnIndicators(clueText) {
	let returnArray = [];
	// Go through object
	for (var type in indicators) {
		var endArray = [];
		for (var i = 0; i < indicators[type].words.length; i++) {
			// First Check if it includes it
			if (clueText.toLowerCase().includes(indicators[type].words[i].toLowerCase())) {
				// Check for multiple words as these won't be mistakes
				if (countWords(indicators[type].words[i]) > 1) {
					endArray.push(indicators[type].words[i]);
				} else {
					// One word must be checked as it may be inside words
					const splitClue = clueText.toLowerCase().split(' ');
					if (splitClue.includes(indicators[type].words[i].toLowerCase())) {
						endArray.push(indicators[type].words[i]);
					}
				}
			}
		}
		if (endArray.length > 0) {
			const clueTypeTitle = indicators[type].title;
			returnArray.push({
				[clueTypeTitle]: endArray,
			})
		}
	}
	return returnArray;
}

export default returnIndicators;