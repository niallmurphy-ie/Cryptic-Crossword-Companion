import React, { Fragment } from "react";
import styles from '../styles';

const Clue = ({ clues, currentActive }) => {

  if (!clues || !currentActive) return <div></div>;

  const clueShown = clues[currentActive];

  return (
    <div key={clueShown.clueText}>
      <h4>{clueShown.clueText}</h4>
      <div style={styles.clueHelperSection}>
        {clueShown.abbreviations ? (
          <ClueHelpSection
            key={JSON.stringify(clueShown.abbreviations)}
            clueHelpType="Abbreviations"
            clueHelp={clueShown.abbreviations}
          />
        ) : (
          ""
        )}
      </div>
      <div style={styles.clueHelperSection}>
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
    <div>
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
      <Fragment key={"fragment_" + help[row].join('')}>
        <strong>{row}: </strong> {help[row].join(", ")}
      </Fragment>
    );
  }
  return text;
};

export default Clue;
