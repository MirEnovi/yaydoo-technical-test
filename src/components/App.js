import React, { Component } from 'react';

import './App.css';

import config from '../config/config.json';

import Form from './form';
import Title from './title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoState: []
    };
  }

    
  onInputChange = (info) => {
    console.log(info);
    this.setState({
      infoState: this.state.infoState.concat(info)
    })
  }

  onChangeSelec = (selectedOption) => {
    console.log(selectedOption);
    const arrInfo = [selectedOption] 
    this.setState({ 
      infoState: this.state.infoState.concat(arrInfo)
    });
  }

  onSubmit =(e) => {
		e.preventDefault();
    console.log(this.state);
	}

  render() {
    
    // eslint-disable-next-line array-callback-return
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
        result.push((
        <div key = {`${title.length}-${index}-${i}`} >
          <Form 
            onChangeSelec={this.onChangeSelec}
            onInputChange={this.onInputChange}
            options = {fields[i].options}
            value={this.state.value}
            name={fields[i].name}
            type={fields[i].type}
            label={fields[i].label}/>
          </div>));
        }
        return result;
    });


    return (
      <div className='App'>
        <form className='row' onSubmit={this.onSubmit}>
          <div className='col s12'>
            {form}
          </div>
          <button className='btn-large waves-effect waves-light  green lighten-1' type='submit' name='action'>Submit
            <i className='material-icons right'>send</i>
          </button>
        </form> 
      </div>
    );
  }
}

export default App;
