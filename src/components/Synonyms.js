import React, { Fragment } from 'react';
import getSynonyms from '../utils/synonyms/getSynonyms';

const DisplaySynonyms = ({
    clues,
    currentActive,
    appSynonyms,
    setAppSynonyms,
}) => {
    if (!currentActive || !clues) return <div></div>;
    // Set state from parent
    const synonyms = appSynonyms[currentActive] || null;

    // Set synonyms state
    const handleClick = (currentActive) => {
        getSynonyms(
            clues[currentActive].clueText,
            currentActive,
            appSynonyms,
            setAppSynonyms
        );
    };

    // Mosift synonyms state with synonyms length
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

    return (
        <div className="Synonyms">
            {!synonyms ? (
                <div>
                    Synonyms:
                    <button type="button" className="disabled">
                        {' '}
                        -{' '}
                    </button>
                    <span> </span>
                    <button onClick={() => handleClick(currentActive)}>
                        {' '}
                        +{' '}
                    </button>
                    <span> Characters: 0</span>
                </div>
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
            // Replace punctuation so multiple words match length
            (syn) =>
                syn.replace(/[.,\/#!$%\^&\*;:{}'=\-—_`~()]/g, '').length ===
                length
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
    }
    // Synonyms Length Text
    let synonymsLengthText = '';
    synonyms.synonymLength
        ? (synonymsLengthText = `Characters: ${synonyms.synonymLength}`)
        : (synonymsLengthText = 'Characters: 0');

    return (
        <div>
            <div>
                <b>Synonyms: </b>
                <button onClick={() => handleLength('decrease')}> - </button>
                <button onClick={() => handleLength('increase')}> + </button>
                <span> {synonymsLengthText}</span>
            </div>
            {synsArray.map((s) => (
                <div>{s}</div>
            ))}
        </div>
    );
};

export default DisplaySynonyms;
