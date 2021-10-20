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
      console.log("First", clue, abbreviation)
      // Check for multiple words as these won't be mistakes
      if (countWords(abbreviation) > 1) {
        console.log("MULTIPLE", clue, abbreviation)
        abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
      } else {
        console.log("SINGLE", clue, abbreviation)
        // One word must be checked as it may be inside words
        var split = splitWords(clue);
        console.log(split, abbreviation);
        if (split.includes(abbreviation)) {
          console.log("INCLUDES", clue, abbreviation, abbreviations[abbreviation])
          abbArray.push({ [abbreviation]: abbreviations[abbreviation] });
        }
      }
    }
  }
  console.log(abbArray)
  return abbArray;
};

export default returnAbbreviations;
