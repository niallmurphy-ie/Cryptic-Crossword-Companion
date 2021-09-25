import React, { Fragment } from "react";
import getSynonyms from '../utils/getSynonyms';

const Clue = ({ clues, currentActive }) => {

  if (!clues || !currentActive) return <div></div>;
  const clueShown = clues[currentActive];
  // Popup Search
  if (!clueShown || clueShown.clueText === "") return <div></div>;

  return (
    <div key={clueShown.clueText}>
      <h4>{clueShown.clueText}</h4>
      <button onClick={() => getSynonyms(clueShown.clueText)}>Get synonyms</button>
      <div>
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
      <Fragment key={"fragment_" + help[row].join('')}>
        <div className="crossword__clue__text"><strong>{row}: </strong> {help[row].join(", ")}</div>
      </Fragment>
    );
  }
  return text;
};

export default Clue;
