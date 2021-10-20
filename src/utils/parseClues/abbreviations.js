import { splitWords, countWords } from "./helperFunctions";
// JSON
import abbreviations from "../../data/abbreviations";

const returnAbbreviations = (clue) => {
  clue = clue.toLowerCase();
  var abbArray = [];
  // Loop abbreviations
  for (var abbreviation in abbreviations) {
    // First check for included anywhere
    abbreviation = abbreviation.toLowerCase();
    if (clue.includes(abbreviation)) {
      // Check for multiple words as these won't be mistakes
      if (countWords(abbreviation) > 1) {
        abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
      } else {
        // One word must be checked as it may be inside words
        var split = splitWords(clue);
        console.log(split, abbreviation);
        if (split.includes(abbreviation)) {
          abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
        }
      }
    }
  }
  console.log(abbArray)
  return abbArray;
};

export default returnAbbreviations;
