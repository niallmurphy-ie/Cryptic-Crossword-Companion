import { countWords } from "./helperFunctions";
// JSON
import abbreviations from "../../data/abbreviations";

const returnAbbreviations = (clue) => {
  var abbArray = [];
  // Loop abbreviations
  for (var abbreviation in abbreviations) {
    // First check for included anywhere
    if (clue.includes(abbreviation)) {
      // Check for multiple words as these won't be mistakes
      if (countWords(abbreviation) > 1) {
        abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
      } else {
        // One word must be checked as it may be inside words
        var split = clue.split(" ");
        if (split.includes(abbreviation)) {
          abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
        } else if (split.includes(abbreviation)) {
          abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
        }
      }
    }
  }
  return abbArray;
};

export default returnAbbreviations;
