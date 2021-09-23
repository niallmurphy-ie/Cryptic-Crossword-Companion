import React from "react";
import { useState, useEffect } from "react";
import watchGuardianClues, { setupClueState } from "./utils/theGuardian";

function App() {
  console.log("ENTER APP");
  const [clues, setClues] = useState(null);
  const [currentActive, setCurrentActive] = useState("");
  const [clueShown, setClueShown] = useState({clueText: ''});
  // Setup Clue State
  useEffect(() => {
    setClues(setupClueState);
  }, []);
  // Watch Clue Mutations and set current active clue
  watchGuardianClues(setCurrentActive);
  // // Set Clue Help Shown
  useEffect(() => {
    if (!clues || !currentActive) return;
    setClueShown(clues[currentActive]);
    console.log(clues);
    console.log(clueShown);
  }, [currentActive, clues]);

  //  <WatchGuardianClues setCurrentActive={setCurrentActive} currentActive={currentActive} />
  return (
    <div className="appRendered" style={styles.main}>
      <h1>State: {clueShown.clueText ? clueShown.clueText : ''}</h1>
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
