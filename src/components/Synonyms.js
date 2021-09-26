import React, { Fragment, useState } from 'react';
import getSynonyms from '../utils/getSynonyms';

const DisplaySynonyms = ({ clue }) => {
    const [synonyms, setSynonyms] = useState(synonyms || null);

    const handleClick = (clue) => {
        getSynonyms(clue, setSynonyms);
    };
    console.log(synonyms);
    return (
        <div className="Synonyms">
            {!synonyms ? (
                <button onClick={() => handleClick(clue)}>Get synonyms</button>
            ) : (
                ''
            )}
            {synonyms ? (
                <Synonyms key={`synonyms_for_${clue}`} synonyms={synonyms} />
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
