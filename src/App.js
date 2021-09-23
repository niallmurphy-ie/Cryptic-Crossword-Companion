import React from "react";
import { useState, useEffect } from "react";
import WatchGuardianClues from './utils/theGuardian'
import { setupClueState } from "./utils/theGuardian";

function App() {
  const [clues, setClues] = useState([]);
  const [currentActive, setCurrentActive] = useState("");
  const [clueShown, setClueShown] = useState(null);
  // Setup Clue State
  useEffect(() => {
    setClues(setupClueState);
  }, []);
  // Watch Clue Mutations and set current active clue

  // Set Clue Help Shown
  // useEffect(() => {
  //   console.log(currentActive);
  //   setClueShown(clues[currentActive]);
  // }, [currentActive]);

  return (
    <>
      <WatchGuardianClues setCurrentActive={setCurrentActive} />;
      <div style={styles.main}>
        <h1>Chrome Ext - Foreground</h1>
        <button onClick={() => console.log(currentActive)}>State</button>
      </div>
    </>
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
