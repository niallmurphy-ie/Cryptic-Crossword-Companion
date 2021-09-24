// console.log(window.location.href);

// let localStorageKey = null;

// export const setLocalStorageInitialState = (setNotes) => {
// 	localStorageKey = getLocalStorageKey();
// 	console.log(localStorageKey);
// 	if (
// 		localStorage.getItem(localStorageKey) &&
// 		localStorage.getItem(localStorageKey) !== "null"
// 	 ) {
// 		setNotes(JSON.parse(localStorage.getItem(localStorageKey)));
// 	 } else {
// 		const notesObject = {};
// 		for (const clue in clues) {
// 		  notesObject[clue] = "";
// 		}
// 		setNotes(notesObject);
// 	 }
// }

// export const updateLocalStorage = (notes) => {
// 	localStorage.setItem(localStorageKey, JSON.stringify(notes));
// }

// const getLocalStorageKey = () => {
// 	if (window.location.href.includes("https://wwww.theguardian.com")) {
// 		return "crypticCrossWordNotes" + window.location.pathname;
// 	}
// 	return 'crypticCrossWordNotes';
// }