

export function countWords(str) {
	return str.trim().split(/\s+/).length;
}

export function removePunctuation(clue) {
	clue = clue.replace(/'/g, ' ');
	return clue.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~]/g,"");
}
