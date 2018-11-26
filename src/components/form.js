import React, { Component } from 'react';

import Title from './title';
import SelectedOp from './select';

import config from '../config/config.json';


class Form extends Component {
	constructor(props) {
		super(props);
			this.state = {
				input:''
			};
	};

	onChangeI = (e) =>{
		// console.log(`${e.target.name}, ${e.target.value}`);
		this.props.onChangeI(e.target.value, e.target.name);
	}

	onChangeSelec = (selectedOption) => {
    const arrInfo = [selectedOption]; 
    this.props.onChangeS(arrInfo)
	};

	onSubmit = (e) => {
		e.preventDefault();
	}
	
	render() {
		const form = config.questions.map((item, index) => {
      const result =[];
      const title=item.title;
      const fields = item.fields;
      result.push((
        <div key={`${title.length}-${index}`}>
          <Title
            title={title}
          />
        </div>
      ))
      for(let i = 0; i<fields.length; i++) {
				if(fields[i].type !== 'dropdown') {
					const nameJ = fields[i].name;
					// console.log( this.props.inputs[0][nameJ]);
					result.push((
					<div key = {`${title.length}-${index}-${i}`} className='input-field col s6' >
						<input 
							onChange={this.onChangeI}
							value={this.props.inputs[0][nameJ]}
							name={fields[i].name} 
							type={fields[i].type}
							id='autocomplete-input' 
							className='autocomplete' 
						/>
						<label htmlFor='autocomplete-input'>{fields[i].label}</label>
					</div>));
					} else {
						result.push((
							<div className='input-field col s6'>
								<SelectedOp 
									options={fields[i].options}
									onChange={this.onChangeSelec}
								/>
							</div>
						));
					}
				}
        return result;
    });
		return(
			<form className='row' onSubmit={this.onSubmit}>
          <div className='col s12'>
            {form}
          </div>
          <button type='submit' className='btn-large waves-effect waves-light  green lighten-1' name='action'>Submit
            <i className='material-icons right'>send</i>
          </button>
        </form> 
		);
	};
};


export default Form;