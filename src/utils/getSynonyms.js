import axios from 'axios';
import ignorewords from '../data/ignorewords';

const getSynonyms = (clue) => {
    const words = clue
        .replace(/ *\([^)]*\) */g, '')
        .trim()
        .split(/\s+/);
    const filtered = words.filter((w) => !ignorewords['words'].includes(w));
    console.log(filtered);
    filtered.forEach( async (word) => {
        const response = await axios.get(
            `https://thesaurus.altervista.org/thesaurus/v1?word=${word}&language=en_US&output=json&key=Uv4EmijbXOLtebRhJolx`
        );
        console.log(response);
    });
};

export default getSynonyms;
