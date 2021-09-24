import React from "react";
import { useState, useEffect } from "react";
import watchGuardianClues, {
  setupClueState,
  setInitialClue,
} from "./utils/theGuardian";
import Clue from "./components/Clue";
import Note from "./components/Note";
import {
  setLocalStorageInitialState,
  updateLocalStorage,
} from "./utils/localStorage";

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
    setLocalStorageInitialState(setNotes);
  }, [clues]);
  // Update Local Storage with Notes
  useEffect(() => {
    updateLocalStorage(notes);
  }, [notes]);


  return (
    <div className="appRendered">
      <Clue clues={clues} currentActive={currentActive} />
      <Note notes={notes} setNotes={setNotes} currentActive={currentActive} />
    </div>
  );
}

export default App;
