import React, { Fragment } from "react";

const Clue = ({ clues, currentActive }) => {
  if (!clues || !currentActive) return <div></div>;
  const clueShown = clues[currentActive];
  console.log(clueShown);
  return (
    <div>
      <h4>{clueShown.clueText}</h4>
      <div>
        {clueShown.abbreviations && clueShown.abbreviations.length > 0 ? (
          <ClueHelpSection
            clueHelpType="Abbreviations"
            clueHelp={clueShown.abbreviations}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const ClueHelpSection = ({ clueHelp, clueHelpType }) => {
  console.log("ClueHelpSection", clueHelp);
  return (
    <div>
      <div>
        <b>{clueHelpType}</b>
      </div>
      {clueHelp.map((help) => {
        return <div><ClueHelpLine help={help} /></div>;
      })}
    </div>
  );
};

const ClueHelpLine = ({ help }) => {
  console.log("ClueHelpLine");
  console.log(help);
  let text = "";
  for (let row in help) {
    text = (
      <Fragment>
        <strong>{row}: </strong> {help[row].join(", ")}
      </Fragment>
    );
  }
  return text;
};
export default Clue;
