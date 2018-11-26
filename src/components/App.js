import React, { Component } from 'react';

import './App.css';

import config from '../config/config.json';

import Form from './form';
import Title from './title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;
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
        // console.log(`${title.length}-${index}-${i}`);
        console.log(fields[i].options);
        result.push((
        <div key = {`${title.length}-${index}-${i}`} >
          <Form 
            options = {fields[i].options}
            selectedOption={selectedOption}
            handleChange={this.handleChange}
            value={this.state.value}
            name={fields[i].name}
            type={fields[i].type}
            label={fields[i].label}/>
          </div>));
          // console.log(result);
        }
        return result;
    });
    return (
      <div className="App">
        {/* {titleComponent} */}
        <form className="row">
          <div className="col s12">
            {form}
          </div>
        </form> 
      </div>
    );
  }
}

export default App;
