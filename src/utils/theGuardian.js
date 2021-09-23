const theGuardian = () => {
	let elem = document.getElementsByClassName('content__secondary-column');
	let helperBox = '<div id="cryptic_crossword_helper"><h3>Cryptic Crossword Helper</h3><div id="cryptic_crossword_help"></div></div>';
	elem[0].innerHTML = helperBox + elem[0].innerHTML;
}

export default theGuardian;