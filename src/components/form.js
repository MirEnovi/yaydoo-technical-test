import React from 'react';


const Form = (props) => {
	if(props.type !== 'dropdown') {
		return (
			<div className='input-field col s6'>
				<input name={props.name} type={props.type} id='autocomplete-input' className='autocomplete'/>
				<label htmlFor='autocomplete-input'>{props.label}</label>
			</div>
		);
	} else {
		return (
			<div className='input-field col s6'>
				<h1>aqui va el selct</h1>
			</div>
		);
	}
};

export default Form;