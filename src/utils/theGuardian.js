import addClueData from "./addClueData";

const watchGuardianClues = (setCurrentActive) => {
  const clues = document.querySelectorAll(".crossword__clue");
  // Set timer as the guardian fires mutation twice
  let recent = false;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.target.classList.contains("crossword__clue--selected") &&
        !recent
      ) {
        recent = true;
        setCurrentActive(mutation.target.hash);
        // Reset timer
        setTimeout(() => (recent = false), 200);
      }
    });
  });

  clues.forEach((clue) => {
    observer.observe(clue, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });
};

export const setupClueState = () => {
  const clues = document.querySelectorAll(".crossword__clue");
  console.log(clues);
  const clueState = {};
  clues.forEach((clue) => {
    const data = addClueData(clue.lastChild.innerText);
    clueState[clue.hash] = data;
  });
  return clueState;
};

export default watchGuardianClues;
