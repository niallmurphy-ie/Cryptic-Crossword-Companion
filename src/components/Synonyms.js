import React, { Fragment, useState, useEffect } from 'react';
import getSynonyms from '../utils/getSynonyms';

const DisplaySynonyms = ({ clues, currentActive, appSynonyms, setAppSynonyms }) => {
	console.log("DisplaySynonyms", clues, currentActive, appSynonyms, setAppSynonyms);
	if (!currentActive || !clues) return <div></div>;
    // Set state from parent
    const synonyms = appSynonyms[currentActive]|| null;

    const handleClick = (currentActive) => {
        getSynonyms(clues[currentActive].clueText, currentActive, appSynonyms, setAppSynonyms);
    };
    console.log('New synonyms', synonyms);

    return (
        <div className="Synonyms">
            {!synonyms ? (
                <button onClick={() => handleClick(currentActive)}>Get synonyms</button>
            ) : (
                ''
            )}
            {synonyms ? (
                <Synonyms key={`synonyms_for_${currentActive}`} synonyms={synonyms} />
            ) : (
                ''
            )}
        </div>
    );
};

const Synonyms = ({ synonyms }) => {
    const synsArray = [];
    // const length = synonyms.length;
    const length = 4;
    for (const s in synonyms.synonymData) {
        // Filter length
        const synonymsArray = synonyms.synonymData[s].filter(syn => syn.length <= length);
        synsArray.push(
            <Fragment key={'synonym_' + synonyms[s]}>
                <div className="crossword__clue__text">
                    <strong>{s}: </strong> {synonymsArray.join(', ')}
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
