import React, { useState } from 'react';
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

    // Button state for +1 Synonyms
    const [buttonState, setButtonState] = useState(false);

    // Set synonyms state
    const handleClick = (currentActive) => {
        setButtonState(true);
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
                    Synonyms:{' '}
                    <button disabled="true" type="button" className="disabled">
                        {' '}
                        -{' '}
                    </button>
                    {' '}
                    <button disabled={buttonState} onClick={() => handleClick(currentActive)}>
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
