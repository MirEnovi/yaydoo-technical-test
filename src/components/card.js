import React from 'react';

const CardInfo = (props) => {

	const cardInfo = props.infoState;
	const divStyle = {
		display: props.style,
	};
	return (
		<div className='row' style={divStyle}>
			<div className='col s12 m12'>
				<div className='card blue lighten-5'>
					<div className='card-content  blue-grey-text text-darken-2'>
						<h4>Tu Información</h4>
						<div className='left-align'>
							<p>First Name: {cardInfo.first_name} </p>
							<p>Last Name: {cardInfo.last_name} </p>
							<p>Country: {cardInfo.selectedOption.value} </p>
							<p>Email: {cardInfo.email} </p>
							<p>Phone Number: {cardInfo.phone_number}</p>
							<p>Post Code: {cardInfo.post_code}</p>
							<p>Street Address: {cardInfo.street_address}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardInfo;