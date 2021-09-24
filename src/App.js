import React from "react";
import { useState, useEffect } from "react";
import watchGuardianClues, {
  setupClueState,
  setInitialClue,
} from "./utils/theGuardian";
import Clue from "./components/Clue";
import Note from "./components/Note";

function App() {
  const [clues, setClues] = useState(null);
  const [currentActive, setCurrentActive] = useState(null);
  const [notes, setNotes] = useState(null);
  // Setup Initial Clue State
  useEffect(() => {
    setClues(setupClueState);
  }, []);
  // Set initial clue on page load
  useEffect(() => {
    setInitialClue(setCurrentActive);
  }, []);
  // Watch and set current active clue
  watchGuardianClues(setCurrentActive);
  // Set Notes State
  useEffect(() => {
    if (
      localStorage.getItem("crypticCrossWordNotes") &&
      localStorage.getItem("crypticCrossWordNotes") !== "null"
    ) {
      setNotes(JSON.parse(localStorage.getItem("crypticCrossWordNotes")));
    } else {
      const notesObject = {};
      for (const clue in clues) {
        notesObject[clue] = "";
      }
      setNotes(notesObject);
    }
  }, [clues]);
  // Add notes to local storage
  // setInterval(() => {
  //   localStorage.setItem("crypticCrossWordNotes", JSON.stringify(notes));
  // }, 500);
  useEffect(() => {
    localStorage.setItem("crypticCrossWordNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="appRendered" >
      <Clue clues={clues} currentActive={currentActive} />
      <Note notes={notes} setNotes={setNotes} currentActive={currentActive} />
    </div>
  );
}

export default App;
