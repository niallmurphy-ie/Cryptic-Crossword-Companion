import currentWebsite from './currentWebsite';

const getLocalStorageKey = () => {
	if (window.location.href.includes(currentWebsite)) {
		return 'crypticCrossWordNotes' + window.location.pathname;
	}
	return 'crypticCrossWordNotes';
};

const localStorageKey = getLocalStorageKey();

export const setLocalStorageInitialState = (setNotes, clues) => {
	if (!clues || !setNotes) return;
	if (
		localStorage.getItem(localStorageKey) &&
		localStorage.getItem(localStorageKey) !== 'null'
	) {
		setNotes(JSON.parse(localStorage.getItem(localStorageKey)));
	} else {
		const notesObject = {};
		for (const clue in clues) {
			notesObject[clue] = '';
		}
		setNotes(notesObject);
	}
};

export const updateLocalStorage = (notes) => {
	if (!notes) return;
	localStorage.setItem(localStorageKey, JSON.stringify(notes));
};
