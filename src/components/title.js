import React from 'react';

const Title = (props) => {
  return(
		<h3 key={props.key}>
			{props.title}
		</h3>
	);
};

export default Title;