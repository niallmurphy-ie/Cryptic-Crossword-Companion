import React, { Fragment } from 'react';

const ClueHelpSection = ({ clueHelp, clueHelpType }) => {
	return (
		 <div className="clueHelperSection">
			  <div>
					<b>{clueHelpType}</b>
			  </div>
			  {clueHelp.map((help) => {
					return (
						 <div>
							  <ClueHelpLine key={JSON.stringify(help)} help={help} />
						 </div>
					);
			  })}
		 </div>
	);
};

const ClueHelpLine = ({ help }) => {
	let text = '';
	for (let row in help) {
		 text = (
			  <Fragment key={'fragment_' + help[row].join('')}>
					<div className="crossword__clue__text">
						 <strong>{row}: </strong> {help[row].join(', ')}
					</div>
			  </Fragment>
		 );
	}
	return text;
};

export default ClueHelpSection;