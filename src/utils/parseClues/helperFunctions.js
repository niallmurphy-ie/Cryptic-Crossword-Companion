export function countWords(str) {
    return str.trim().split(/\s+/).length;
}

export function removePunctuation(clue) {
    clue = clue.replace(/'/g, ' ');
    return clue.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~]/g, '');
}

export function clueLength(clue) {
    let split = clue.split('(');
    const last = split[split.length - 1];
    const numberPattern = /\d+/g;
    const numbers = last.match(numberPattern);
	 let num = 0;
	 numbers.forEach(number => num += parseInt(number))
	 return num;
}
