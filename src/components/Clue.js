import React, { Fragment } from "react";
import styles from '../styles';

const Clue = ({ clues, currentActive }) => {
  if (!clues || !currentActive) return <div></div>;
  const clueShown = clues[currentActive];
  return (
    <div key={clueShown.clueText} styles={styles.clueHelperSection} className="clueHelperBox">
      <h4 className="clueHelperTitle">{clueShown.clueText}</h4>
      <div className="clueHelperAbbreviations">
        {clueShown.abbreviations && clueShown.abbreviations.length > 0 ? (
          <ClueHelpSection
			 	key={JSON.stringify(clueShown.abbreviations)}
            clueHelpType="Abbreviations"
            clueHelp={clueShown.abbreviations}
          />
        ) : (
          ""
        )}
      </div>
      <div>
        {clueShown.indicators ? (
          <ClueHelpSection
			 	key={JSON.stringify(clueShown.indicators)}
            clueHelpType="Indicators"
            clueHelp={clueShown.indicators}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const ClueHelpSection = ({ clueHelp, clueHelpType }) => {
  return (
    <div className="clueHelperSection">
      <div>
        <b>{clueHelpType}</b>
      </div>
      {clueHelp.map((help) => {
        return (
          <div>
            <ClueHelpLine key={JSON.stringify(help)} help={help} />
          </div>
        );
      })}
    </div>
  );
};

const ClueHelpLine = ({ help }) => {
  let text = "";
  for (let row in help) {
    text = (
      <Fragment className="clueHelperLine">
        <strong>{row}: </strong> {help[row].join(", ")}
      </Fragment>
    );
  }
  return text;
};

export default Clue;
