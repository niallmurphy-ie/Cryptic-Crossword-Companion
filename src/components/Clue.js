import React from "react";

const Clue = ({ clues, currentActive }) => {
  if (!clues || !currentActive) return <div></div>;
  const clueShown = clues[currentActive];
  return (
    <div>
      <h3>{clueShown.clueText ? clueShown.clueText : ""}</h3>
      <div>
        {clueShown.abbreviations
          ? "Abbreviations: " + clueShown.abbreviations
          : ""}
      </div>
    </div>
  );
};

export default Clue;
