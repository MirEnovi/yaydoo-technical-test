import React from 'react';

const CardInfo = (props) => {
	console.log(props.information.infoState);
	const cardInfo = props.information.infoState;
	return (
		<div className='row'>
			<div className='col s12 m12'>
				<div className='card blue lighten-5'>
					<div className='card-content  blue-grey-text text-darken-2'>
						<h4>Valida tu Información</h4>
						<div className='left-align'>
							<p>FirstName: {cardInfo[0]} </p>
							<p>LastName: {cardInfo[1]} </p>
							<p>Country: </p>
							<p>Email:  </p>
							<p>PhoneNumber: {cardInfo[2]}</p>
							<p>PostCode: </p>
							<p>StreetAddress: {cardInfo[3]}</p>
						</div>
					</div>
					{/* <div className='card-action'>
						<a href='#'>This is a link</a>
						<a href='#'>This is a link</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default CardInfo;