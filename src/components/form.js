import React from 'react';

import SelectedOp from './select';


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
				<SelectedOp 
					selectedOption={props.selectedOption}
					handleChange={props.handleChange}
					options={props.options}
				/>
			</div>
		);
	}
};

export default Form;