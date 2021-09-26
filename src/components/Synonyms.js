import React, { Fragment, useState } from 'react';
import getSynonyms from '../utils/getSynonyms';

const DisplaySynonyms = ({ clue }) => {
	const [synonyms, setSynonyms] = useState(null);

	const handleClick = async (clue) => {
		//  const syns = await getSynonyms(clue);
		getSynonyms(clue, setSynonyms);
		 // setSynonyms(syns);
	};
	console.log(synonyms);
	return (
		 <div className="Synonyms">
			  {!synonyms ? (
					<button onClick={() => handleClick(clue)}>Get synonyms</button>
			  ) : (
					''
			  )}
			  {synonyms ? <Synonyms synonyms={synonyms} /> : ''}
		 </div>
	);
};

const Synonyms = ({ synonyms }) => {
	const synsArray = [];
	console.log(synonyms);
	console.log("artist", synonyms["Artist"]);

	for (const s in synonyms) {
		 synsArray.push(
			  <Fragment key={'synonym_' + synonyms[s]}>
					<div className="crossword__clue__text">
						 <strong>{s}: </strong> {synonyms[s].join(', ')}
					</div>
			  </Fragment>
		 );
		 console.log(s)
	}
	return (
	  <div>
		 {synsArray}
	  </div>
	)
};

export default DisplaySynonyms;