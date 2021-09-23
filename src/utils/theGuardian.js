import React from "react";
import { useState, useEffect } from "react";

export const setupClueState = () => {
  const clues = document.querySelectorAll(".crossword__clue");
  const clueState = {};
  clues.forEach((clue) => {
    clueState[clue.hash] = {
      clueText: clue.lastChild.innerText,
    };
  });
  return clueState;
};

const WatchGuardianClues = ({ setCurrentActive }) => {
  console.log(setCurrentActive);
  const clues = document.querySelectorAll(".crossword__clue");
  // Set timer as the guardian fires mutation twice
  let recent = false;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.target.classList.contains("crossword__clue--selected") &&
        !recent
      ) {
        console.log(mutation.target.hash);
        recent = true;
        setCurrentActive(mutation.target.hash);
      }
      // Reset timer
      setTimeout(() => (recent = false), 100);
    });
  });

  clues.forEach((clue) => {
    observer.observe(clue, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });

  return <div></div>;
};

export default WatchGuardianClues;
