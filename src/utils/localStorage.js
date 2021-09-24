const getLocalStorageKey = () => {
	if (window.location.href.includes("https://www.theguardian.com")) {
		return "crypticCrossWordNotes" + window.location.pathname;
	}
	return 'crypticCrossWordNotes';
}

const localStorageKey = getLocalStorageKey();

export const setLocalStorageInitialState = (setNotes, clues) => {

	console.log(localStorageKey);
	if (
		localStorage.getItem(localStorageKey) &&
		localStorage.getItem(localStorageKey) !== "null"
	 ) {
		setNotes(JSON.parse(localStorage.getItem(localStorageKey)));
	 } else {
		const notesObject = {};
		for (const clue in clues) {
		  notesObject[clue] = "";
		}
		setNotes(notesObject);
	 }
}

export const updateLocalStorage = (notes) => {
	localStorage.setItem(localStorageKey, JSON.stringify(notes));
}

