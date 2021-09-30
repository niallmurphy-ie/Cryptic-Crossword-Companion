import React from 'react';
import { useState, useEffect } from 'react';
import currentWebsite from './utils/currentWebsite';

import watchGuardianClues, {
    setupClueState,
    setInitialClue,
} from './utils/theGuardian';
import Clue from './components/Clue';
import Note from './components/Note';
import {
    setLocalStorageInitialState,
    updateLocalStorage,
} from './utils/localStorage';
import DisplaySynonyms from './components/Synonyms';

function App() {
    const [clues, setClues] = useState(null);
    const [currentActive, setCurrentActive] = useState(null);
    const [notes, setNotes] = useState(null);
    const [appSynonyms, setAppSynonyms] = useState({});
    /**
     * Clues
     */
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
    /**
     * Notes
     */
    // Set Notes State
    useEffect(() => {
        setLocalStorageInitialState(setNotes, clues);
    }, [clues]);
    // Update Notes state
    useEffect(() => {
        updateLocalStorage(notes);
    }, [notes]);

    // Test
    useEffect(() => {
        console.log('Synonyms Updated');
    }, [appSynonyms])

    // <Synonyms clues={clues} currentActive={currentActive} synonyms={synonyms} setSynonyms= />
    //
    return (
        <div className="appRendered">
            <Clue
                clues={clues}
                currentActive={currentActive}
                setClues={setClues}
            />
            <DisplaySynonyms
                key={"displaySynonyms_" + currentActive}
                clues={clues}
                currentActive={currentActive}
                appSynonyms={appSynonyms}
                setAppSynonyms={setAppSynonyms}
            />
            <Note
                notes={notes}
                setNotes={setNotes}
                currentActive={currentActive}
            />
        </div>
    );
}

export default App;
