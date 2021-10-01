import React from 'react';
import ShowSynonyms from './ShowSynonyms';
import getSynonyms from '../../utils/synonyms/getSynonyms';

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

    // Update synonyms state with synonyms length
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
                    <button disabled type="button" className="disabled">
                        {' '}
                        -{' '}
                    </button>
                    <span> </span>
                    <button onClick={() => handleClick(currentActive)}>
                        {' '}
                        +{' '}
                    </button>{' '}
                    Characters: 0
                </div>
            ) : (
                ''
            )}
            {synonyms ? (
                <ShowSynonyms
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

export default DisplaySynonyms;
