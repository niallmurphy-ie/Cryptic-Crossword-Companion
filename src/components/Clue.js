import React, { Fragment } from 'react';
import DisplaySynonyms from './Synonyms';
import ClueHelpSection from './ClueHelpSection';

const Clue = ({ clues, currentActive, setClues }) => {
    if (!clues || !currentActive) return <div></div>;
    const clueShown = clues[currentActive];
    // Popup Search
    if (!clueShown || clueShown.clueText === '') return <div></div>;

    return (
        <div key={clueShown.clueText}>
            <h4>{clueShown.clueText}</h4>
            <div>
                {clueShown.abbreviations ? (
                    <ClueHelpSection
                        key={JSON.stringify(clueShown.abbreviations)}
                        clueHelpType="Abbreviations"
                        clueHelp={clueShown.abbreviations}
                    />
                ) : (
                    ''
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
                    ''
                )}
            </div>
            <div className="clueHelperSection">
                <DisplaySynonyms
                    key={'synonyms_' + clueShown.clueText}
                    clue={clueShown.clueText}
                />
            </div>
        </div>
    );
};

export default Clue;
