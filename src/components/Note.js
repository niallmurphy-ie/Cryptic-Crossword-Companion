import React, { useState, useEffect } from "react";
import styles from "../styles"

const Note = ({ notes, setNotes, currentActive }) => {
  if (!notes || !currentActive) return <div></div>;

  const [currentNote, setCurrentNote] = useState(notes[currentActive]);
  // Update on change
  useEffect(() => {
    setCurrentNote(notes[currentActive]);
  }, [currentActive]);

  const handleNoteUpdate = (event) => {
    const note = event.target.value;
    setCurrentNote(note);
    const updateNote = { ...notes };
    updateNote[currentActive] = note;
    setNotes(updateNote);
  };
  return (
    <div style={styles.noteSection}>
      <div>Notes</div>
      <textarea
        type="text"
        name="textarea"
        value={currentNote}
        onChange={handleNoteUpdate}
      />
      ;
    </div>
  );
};

export default Note;
