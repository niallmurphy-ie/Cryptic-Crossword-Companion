import abbreviations from "../data/abbreviations";

const addClueData = (clue) => {
  let clueOut = {};
  clueOut["clueText"] = clue;
  clueOut["abbreviations"] = returnAbbreviations(clue);
  return clueOut;
};

const returnAbbreviations = (clue) => {
  var abbArray = [];
  // Loop abbreviations
  for (var abbreviation in abbreviations) {
    // First check for included anywhere
    if (clue.includes(abbreviation)) {
      // Check for multiple words as these won't be mistakes
      if (countWords(abbreviation) > 1) {
        abbArray.push(abbreviation + ": " + abbreviations[abbreviation].join(", "));
      } else {
        // One word must be checked as it may be inside words
        var split = clue.split(" ");
        if (split.includes(abbreviation)) {
          abbArray.push(abbreviation + ": " + abbreviations[abbreviation].join(", "));
        } else if (split.includes(abbreviation)) {
          abbArray.push(abbreviation + ": " + abbreviations[abbreviation].join(", "));
        }
      }
    }
  }
  return abbArray;
};

function countWords(str) {
	return str.trim().split(/\s+/).length;
}

function removePunctuation(clue) {
	clue = clue.replace(/'/g, ' ');
	return clue.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~]/g,"");
}


export default addClueData;
