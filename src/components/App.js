/* eslint-disable array-callback-return */
import React, { Component } from 'react';

import './App.css';

// import config from '../config/config.json';

import Form from './form';
// import Title from './title';
// import CardInfo from './card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      inputs:[
        {
          first_name:'',
          last_name:'',
          email: '',
          phone_number: '',
          street_address: '',
          post_code:'',
        },  
      ],
      infoState: []
    };
  };

  addInfo = (info) => {
    console.log(info);
    // this.setState({
    //   infoState: [...this.state.infoState, info]
    // });
  }

  onChangeSelct = (selectedOption) => {
    const info = [selectedOption];
    this.setState({ 
      infoState: this.state.infoState.concat(info)
    });
  };

  onChangeInput = (value, name) => {
    console.log(value, name);
    let valueState = '';
    valueState = valueState + value;
    // const info = {
    //   name,
    //   value
    // }
    // this.setState({
    //   infoState:this.state.infoState.concat(info)
    // });
    console.log(valueState);
  };

  render() {
    const { inputs } = this.state;
    return (
      <div className='App'>
        <Form
          inputs={inputs}

          addInfo={this.addInfo}
          onChangeS={this.onChangeSelect}
          onChangeI={this.onChangeInput}
        />
      </div>
    );
  }
}

export default App;
