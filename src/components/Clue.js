import React from "react";

const Clue = ({ clues, currentActive }) => {
  if (!clues || !currentActive) return <div></div>;
  const clueShown = clues[currentActive];
  console.log(clueShown);
  return (
    <div>
      <h4>{clueShown.clueText}</h4>
      <div>
        {clueShown.abbreviations && clueShown.abbreviations.length > 0
          ? <ClueHelpSection clueHelpType="Abbreviations" clueHelp={clueShown.abbreviations} />
          : ""}
      </div>
    </div>
  );
};

const ClueHelpSection = ({ clueHelp, clueHelpType }) => {
  return (
    <div>
      <div>
        <b>{clueHelpType}</b>
      </div>
      {clueHelp.map((help) => {
        return <div>{help}</div>;
      })}
    </div>
  );
};

export default Clue;
