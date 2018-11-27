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
		this.props.onChangeI(e.target.value, e.target.name);
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.cardInfo();
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
				const nameJ = fields[i].name;
				// console.log( this.props.inputs[nameJ]);
				console.log(`${title.length}-${index}-${i}`);
				if(fields[i].type !== 'dropdown') {
					result.push((
					<div key = {`${title.length}-${index}-${i}`} className='input-field col s6' >
						<input 
							onChange={this.onChangeI}
							value={this.props.inputs[nameJ]}
							name={fields[i].name} 
							type={fields[i].type}
							id='autocomplete-input' 
							className='autocomplete' 
						/>
						<label htmlFor='autocomplete-input'>{fields[i].label}</label>
					</div>));
					} else {
						result.push((
							<div className='input-field col s6' key = {`${title.length}-${index}-${i}`} >
								<SelectedOp 
									value={this.props.valueSelect}
									options={fields[i].options}
									onChangeS={this.props.onChangeS}
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