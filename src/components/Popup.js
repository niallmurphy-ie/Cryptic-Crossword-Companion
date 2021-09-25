import React, { useState, useEffect } from 'react';
import Clue from './Clue';

function Popup() {
    const [input, setInput] = useState('');
    const [fakedClues, setFakedClues] = useState(null);
    const fakedCurrentActive = 'popUpSearch';

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    // Create fake object to use Clue component
    useEffect(() => {
        setFakedClues([{ popUpSearch: input }]);
    }, [input]);

    return (
        <div>
            <div>Type a clue:</div>
            <input value={input} onChange={handleChange}></input>
            <Clue clues={fakedClues} currentActive="popUpSearch" />
        </div>
    );
}

export default Popup;
