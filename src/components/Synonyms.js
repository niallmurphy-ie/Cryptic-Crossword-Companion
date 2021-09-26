import React, { Fragment, useState, useEffect } from 'react';
import getSynonyms from '../utils/getSynonyms';

const DisplaySynonyms = ({ clues, currentActive, appSynonyms, setAppSynonyms }) => {
	console.log(clues, currentActive, appSynonyms, setAppSynonyms);3
	if (!currentActive || !clues) return <div></div>;
    // Set state from parent
    const synonyms = appSynonyms[currentActive] || null;

    const handleClick = (currentActive) => {
        getSynonyms(clues[currentActive].clueText, currentActive, appSynonyms, setAppSynonyms);
    };
    console.log('New synonyms', synonyms);

    return (
        <div className="Synonyms">
            {!appSynonyms[currentActive] ? (
                <button onClick={() => handleClick(currentActive)}>Get synonyms</button>
            ) : (
                ''
            )}
            {appSynonyms[currentActive] ? (
                <Synonyms key={`synonyms_for_${currentActive}`} synonyms={synonyms} />
            ) : (
                ''
            )}
        </div>
    );
};

const Synonyms = ({ synonyms }) => {
    const synsArray = [];
    console.log(synonyms);
    console.log('artist', synonyms['Artist']);

    for (const s in synonyms) {
        synsArray.push(
            <Fragment key={'synonym_' + synonyms[s]}>
                <div className="crossword__clue__text">
                    <strong>{s}: </strong> {synonyms[s].join(', ')}
                </div>
            </Fragment>
        );
        console.log(s);
    }
    return (
        <div>
            <div>
                <b>Synonyms</b>
            </div>
            {synsArray.map((s) => (
                <div>{s}</div>
            ))}
        </div>
    );
};

export default DisplaySynonyms;
