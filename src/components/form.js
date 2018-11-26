import React from 'react';

import SelectedOp from './select';


const Form = (props) => {
	const onChange = (e) => {
		const arrInfo = [e.target.value];
		props.onInputChange(arrInfo)
	}
	if(props.type !== 'dropdown') {
		return (
			<div className='input-field col s6'>
				<input 
					name={props.name} 
					type={props.type}
					onChange={onChange} 
					id='autocomplete-input' 
					className='autocomplete' 
				/>
				<label htmlFor='autocomplete-input'>{props.label}</label>
			</div>
		);
	} else {
		return (
			<div className='input-field col s6'>
				<SelectedOp 
					options={props.options}
					onChange={props.onChangeSelec}
				/>
			</div>
		);
	}
};

export default Form;