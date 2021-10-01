import React, { Fragment, useState, useEffect } from 'react';
import getSynonyms from '../utils/getSynonyms';

const DisplaySynonyms = ({
    clues,
    currentActive,
    appSynonyms,
    setAppSynonyms,
}) => {
    console.log(
        'DisplaySynonyms',
        clues,
        currentActive,
        appSynonyms,
        setAppSynonyms
    );
    if (!currentActive || !clues) return <div></div>;
    // Set state from parent
    const synonyms = appSynonyms[currentActive] || null;

    const handleClick = (currentActive) => {
        getSynonyms(
            clues[currentActive].clueText,
            currentActive,
            appSynonyms,
            setAppSynonyms
        );
    };

    const handleLength = (action) => {
        const updatedSynonyms = { ...appSynonyms };
        switch (action) {
            case 'increase':
                updatedSynonyms[currentActive].synonymLength++;
                setAppSynonyms(updatedSynonyms);
                break;
            case 'decrease':
                updatedSynonyms[currentActive].synonymLength--;
                setAppSynonyms(updatedSynonyms);
                break;
            default:
                return;
        }
    };
    console.log('New synonyms', synonyms);

    return (
        <div className="Synonyms">
            {!synonyms ? (
                <button onClick={() => handleClick(currentActive)}>
                    Get synonyms
                </button>
            ) : (
                ''
            )}
            {synonyms ? (
                <Synonyms
                    key={`synonyms_for_${currentActive}`}
                    synonyms={synonyms}
                    handleLength={handleLength}
                />
            ) : (
                ''
            )}
        </div>
    );
};

const Synonyms = ({ synonyms, handleLength }) => {
    const synsArray = [];
    // const length = synonyms.length;
    const length = synonyms.synonymLength;

    for (const s in synonyms.synonymData) {
        // Filter by length
        const synonymsArray = synonyms.synonymData[s].filter(
            (syn) => syn.length === length
        );
        // Sort by length
        synonymsArray.sort(function (a, b) {
            return a.length - b.length;
        });
        // Create fragment Array
        synsArray.push(
            <Fragment key={'synonym_' + synonyms[s]}>
                <div className="crossword__clue__text">
                    <strong>{s}: </strong> {synonymsArray.join(', ')}
                </div>
            </Fragment>
        );
        console.log(s);
    }
    // Synonyms Length Text
    let synonymsLengthText = '';
    synonyms.synonymLength
        ? (synonymsLengthText = `Characters: ${synonyms.synonymLength}`)
        : (synonymsLengthText = '');

    return (
        <div>
            <div>
                <b>Synonyms: </b>
                <button onClick={() => handleLength('decrease')}> - </button>
                <button onClick={() => handleLength('increase')}> + </button>
                {synonymsLengthText}
            </div>
            {synsArray.map((s) => (
                <div>{s}</div>
            ))}
        </div>
    );
};

export default DisplaySynonyms;
