import React from "react";
import { useState, useEffect } from "react";
import watchGuardianClues, { setupClueState } from "./utils/theGuardian";
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
  setInterval(() => {
    localStorage.setItem("crypticCrossWordNotes", JSON.stringify(notes));
  }, 3000);

  return (
    <div className="appRendered" style={styles.main}>
      <Clue clues={clues} currentActive={currentActive} />
      <Note notes={notes} setNotes={setNotes} currentActive={currentActive} />
    </div>
  );
}

const styles = {
  // main: {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     zIndex: '1000',
  //     fontSize: '80px',
  //     pointerEvents: 'none'
  // }
};

export default App;
