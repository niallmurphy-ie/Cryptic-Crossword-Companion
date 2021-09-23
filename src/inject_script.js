
// Run for the Guardian


// Check if already created
if (!document.getElementById("cryptic_crossword_help")) {
  // Create element for React
  const theGuardianDiv = () => {
	let elem = document.getElementsByClassName('content__secondary-column');
	let helperBox = '<div id="cryptic_crossword_helper"><h3>Cryptic Crossword Helper</h3><div id="cryptic_crossword_help"></div></div>';
	elem[0].innerHTML = helperBox + elem[0].innerHTML;
}


  theGuardianDiv();

  const foreground_entry_point = document.createElement("div");
  let reactJS_script = document.createElement("script");

  foreground_entry_point.id = "foreground";
  reactJS_script.src = "foreground.bundle.js";

  foreground_entry_point.appendChild(reactJS_script);

  document.querySelector("body").appendChild(foreground_entry_point);
}

