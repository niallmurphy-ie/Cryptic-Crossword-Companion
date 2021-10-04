import React, { useState, useEffect } from 'react';
import Clue from './Clue';
import addClueData from '../utils/addClueData';

import css from '../styles/popup.css';

const Popup = () => {
    const [input, setInput] = useState('');
    const [fakedClues, setFakedClues] = useState(null);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    // Create fake object to use Clue component
    useEffect(() => {
        setFakedClues({popUpSearch: addClueData(input)});
    }, [input]);

    return (
        <div>
            <div>Type a clue:</div>
            <textarea value={input} onChange={handleChange}></textarea>
            <Clue clues={fakedClues} currentActive="popUpSearch" />
        </div>
    );
}

export default Popup;
