import React, { Component } from 'react';

import './App.css';

import config from '../config/config.json';

import Form from './form';
import Title from './title';

class App extends Component {
  render() {
    // eslint-disable-next-line array-callback-return
    const titleComponent = config.questions.map((item, index)=>{
      return (
        <Title
          key={`${item.title}-${index}`}
          title={item.title}/>
      )
    })
    const form = config.questions.map((item, index) => {
      const result =[];
      const title=item.title;
      const fields = item.fields;
      for(let i = 0; i<fields.length; i++) {
        result.push((<div key = {`${title}-${index}`}>
          <Form 
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
        {titleComponent}
        <div className="row">
          <div className="col s12">
            <div className="row">
              {form}
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
