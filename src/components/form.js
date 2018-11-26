import React from 'react';

const Form = (props) => {
	if(props.type === 'dropdown') {
		return (<div className='input-field col s12'>
			<select>
				<option value='' disabled selected>Choose your option</option>
				<option value='1'>Option 1</option>
				<option value='2'>Option 2</option>
				<option value='3'>Option 3</option>
			</select>
			<label>Materialize Select</label>
		</div>)
	}
	return (
		<div className='input-field col s6'>
			{/* <i className='material-icons prefix'>textsms</i> */}
			<input name={props.name} type={props.type} id='autocomplete-input' className='autocomplete'/>
			<label for='autocomplete-input'>{props.label}</label>
		</div>
	);
};

export default Form;